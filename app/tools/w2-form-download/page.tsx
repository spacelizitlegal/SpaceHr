import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "W-2 Form Download — IRS Tax Form PDF | Space HR",
  description: "Download IRS Form W-2 for tax filing. Get the official Wage and Tax Statement PDF for employees and employers. Free tool by Space HR.",
  alternates: {
    canonical: "https://spacehr.net/tools/w2-form-download",
  },
};

export default function W2FormDownloadRedirect() {
  redirect("/tools/fw4-form-download");
}
