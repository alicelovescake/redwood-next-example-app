import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ClipboardJS from "clipboard";

import { useNominations } from "../context/NominationsContext";

export default function SharedNominations() {
  const router = useRouter();
  const [shareableLink, setShareableLink] = useState("");
  const { nominations, setNominations } = useNominations();
  const [displayCopied, setDisplayCopied] = useState(false);

  let clipboard;

  useEffect(() => {
    if (router?.query?.nominations) {
      const decodedNominations = atob(router?.query?.nominations);
      try {
        const parsedNominations = JSON.parse(decodedNominations);
        setNominations(parsedNominations);
      } catch (error) {
        console.error("Failed to parse shared nominations :(");
      }
    }
  }, [router?.query?.nominations]);

  useEffect(() => {
    if (nominations.length > 0) {
      const nominationsString = JSON.stringify(nominations);
      const encodedNominations = btoa(nominationsString);
      setShareableLink(
        `${window.location.origin}?nominations=${encodedNominations}`
      );
    }
  }, [nominations.length]);

  useEffect(() => {
    clipboard = new ClipboardJS(".btn");
    clipboard.on("success", () => {
      setDisplayCopied(true);
    });
  }, []);

  useEffect(() => {
    if (displayCopied) {
      setTimeout(() => setDisplayCopied(false), 3000);
    }
  }, [displayCopied]);

  return (
    <>
      {displayCopied && (
        <div className="p-4 absolute top-0 right-0 left-0 rounded-lg text-white z-50">
          <div className="bg-brand-green mx-auto w-1/4 shadow-xl text-center p-4 rounded-lg">
            🔗 Link copied to your clipboard!
          </div>
        </div>
      )}

      {shareableLink && (
        <h1 className="text-xl text-center text-brand-green-dark pb-12">
          Share your nominations with{" "}
          <span
            data-clipboard-text={shareableLink}
            className="btn font-bold hover:text-brand-green hover:cursor-pointer"
          >
            this link here!
          </span>{" "}
        </h1>
      )}
    </>
  );
}
