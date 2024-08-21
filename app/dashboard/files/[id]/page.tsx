import PDFView from "@/components/PDFView";
import Chat from "@/components/Chat";
import { adminDb } from "@/firebaseAdmin";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const ChatToFilePage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  auth().protect();
  const { userId } = await auth();

  const ref = await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .get();

  const url = ref.data()?.downloadUrl;

  return (
    <div className="grid lg:grid-cols-5 h-full overflow-hidden">
      {/* right */}
      <div className="col-span-5 lg:col-span-2 overflow-y-auto">
        {/* chat */}
        <Chat id={id}></Chat>
      </div>
      {/* left */}{" "}
      <div className="col-span-5 lg:col-span-3 bg-gray-100 border-r-2 lg:border-indigo-600 lg:-order-1 overflow-auto">
        {/* pdfview */}
        <PDFView url={url}></PDFView>
      </div>
    </div>
  );
};

export default ChatToFilePage;
