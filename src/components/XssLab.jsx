
import React from "react";

export default function XssLab() {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get("q") || "No search term";

  // INTENTIONAL VULNERABILITY FOR CODEQL LAB ONLY:
  // Untrusted URL input is inserted directly into HTML.
  return (
    <div>
      <h2>CodeQL XSS Lab</h2>
      <div dangerouslySetInnerHTML={{ __html: searchTerm }} />
    </div>
  );
}
