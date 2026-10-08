import { useState, useEffect } from "react";
import { Eye, EyeOff, Lock, FileSpreadsheet } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

function App() {
  const [count, setCount] = useState(0);
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [emailList, setemailList] = useState([]);
  const [filename, setfilename] = useState("");
  const [sendstatus, setsendstatus] = useState(false);

  const [sendTime, setSendTime] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [resultType, setResultType] = useState("");

  const [gmail, setGmail] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let timer;

    if (sendstatus) {
      setSendTime(0);

      timer = setInterval(() => {
        setSendTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [sendstatus]);

  function handlefile(event) {
    const file = event.target.files[0];

    setfilename(file.name);

    const reader = new FileReader();

    reader.onload = function (e) {
      const data = e.target.result;

      const workbook = XLSX.read(data, {
        type: "binary",
      });

      const sheetNames = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetNames];

      const emailList = XLSX.utils.sheet_to_json(worksheet, {
        header: "A",
      });

      const totalemail = emailList.map((items) => {
        return items.A;
      });

      setemailList(totalemail);
      setCount(emailList.length);
    };

    reader.readAsBinaryString(file);
  }

  const canSend =
    emailList.length > 0 &&
    subject.trim() !== "" &&
    msg.trim() !== "" &&
    gmail.trim() !== "" &&
    appPassword.trim() !== "" &&
    !sendstatus;

  const send = () => {
    setsendstatus(true);
    setResultMessage("");

    axios
      .post("http://localhost:5000/sendemail", {
        gmail: gmail,
        appPassword: appPassword,
        subject: subject,
        msg: msg,
        emaillist: emailList,
      })
      .then((response) => {
        if (response.data.success === true) {
          setResultMessage(response.data.message);
          setResultType("success");

          setSubject("");
          setMsg("");
          setCount(0);
          setemailList([]);
          setfilename("");
        } else {
          setResultMessage(response.data.message);
          setResultType("error");
        }
      })
      .catch((error) => {
        console.log(error);

        setResultMessage("Unable to connect to the server. Please try again.");

        setResultType("error");
      })
      .finally(() => {
        setsendstatus(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            EMAIL AUTOMATION
          </p>

          <h1 className="text-3xl font-bold tracking-tight">Sail - Bulk Mailer App</h1>

          <p className="mt-2 text-gray-500">
            Send personalized emails to multiple recipients in one click.
          </p>
        </div>

        {/* Gmail Connection */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold">
            Gmail Account
          </label>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            {/* Gmail Address */}
            <div className="mb-4">
              <label className="mb-2 block text-xs font-medium text-gray-600">
                Gmail Address
              </label>

              <input
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
                type="email"
                autoComplete="email"
                placeholder="yours@gmail.com"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />
            </div>

            {/* App Password */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-600">
                Gmail App Password
              </label>

              <div className="relative">
                <input
                  value={appPassword}
                  onChange={(e) => setAppPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter your 16-character App Password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />

                {/* Eye Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                  aria-label={
                    showPassword ? "Hide App Password" : "Show App Password"
                  }
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Security Note */}
            <div className="mt-4 flex gap-2 rounded-lg bg-white px-3 py-3">
              <Lock size={16} className="shrink-0 text-orange-600" />

              <p className="text-xs leading-5 text-gray-500">
                Your Gmail credentials are used only for sending emails. We do
                not store your App Password.
              </p>
            </div>

            {/* Guide CTA */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Don't have an App Password?
              </p>

              <Link
                to="/GmailAppPassword"
                className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
              >
                How to create one →
              </Link>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Recipients */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              Recipients
            </label>

            <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 text-center transition hover:border-blue-400">
              <p className="text-sm font-medium text-gray-700">
                Upload your Excel file
              </p>

              <p className="text-xs text-gray-400">
                .xlsx or .csv files supported
              </p>

              <div className="mt-3 rounded-lg bg-blue-50 px-4 py-2.5">
                <div className="flex items-center justify-center gap-2">
                  <FileSpreadsheet size={15} className="text-blue-700" />

                  <p className="text-xs font-medium text-blue-700">
                    Make sure your email addresses are in Column A
                  </p>
                </div>
              </div>

              <Link to={"/fileformatdetails "}>
                <button
                  type="button"
                  className="mt-3 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  View format guide →
                </button>
              </Link>

              <p className="mt-1 text-xs text-gray-400">
                .xlsx or .csv files supported
              </p>

              <label className="mt-4 inline-block cursor-pointer rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                Choose File
                <input
                  onChange={handlefile}
                  type="file"
                  className="hidden"
                  accept=".xlsx,.xls,.csv"
                />
              </label>

              {/* File Info */}
              {filename && (
                <div className="mx-auto mt-4 flex max-w-md items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-left shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <span className="text-sm font-bold text-green-600">
                      XLS
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-700">
                      {filename}
                    </p>

                    <p className="text-xs text-gray-400">
                      File uploaded successfully
                    </p>
                  </div>

                  <div className="ml-auto text-green-500">✓</div>
                </div>
              )}

              <p className="mt-3 text-sm text-gray-500">
                {count} email{count !== 1 ? "s" : ""} loaded
              </p>
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">Subject</label>

            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Enter email subject..."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {/* Email Body */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold">
              Email Body
            </label>

            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows="10"
              placeholder="Write your email here..."
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
            ></textarea>

            <p className="mt-2 text-xs text-gray-400">
              Keep your message clear and concise.
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-5">
            <div>
              <p className="text-sm font-medium text-gray-700">Ready to send</p>

              <p className="text-xs text-gray-400">
                Send to {count} recipient{count !== 1 ? "s" : ""}
              </p>
            </div>

            <button
              onClick={send}
              disabled={!canSend}
              className={`rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm transition ${
                canSend
                  ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >
              {sendstatus ? `Sending... ${sendTime}s` : "Send Email"}
            </button>
          </div>

          {resultMessage && (
            <div
              className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
                resultType === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {resultType === "success" ? "✓" : "⚠"} {resultMessage}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Built by <span className="font-medium text-gray-500">Saikumar</span>
            {" • "}
           Sail Mailer
          </p>

          <p className="mt-1 text-xs text-gray-400">Email automation, simplified.</p>

          <Link
            to="/terms"
            className="mt-2 inline-block text-xs font-medium text-gray-400 transition hover:text-blue-600"
          >
            Terms & Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
