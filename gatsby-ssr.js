// Gatsby SSR (Server Side Rendering) APIs.
// This API will insert Metadata and Script tag into Gatsby main index.js file.

import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents(
    <script
    type="text/javascript"
    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />
  )
  setPostBodyComponents(
    <script
    dangerouslySetInnerHTML={{
      __html:`
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            })
          }
        })
      }
      `
    }}/>
  );
}