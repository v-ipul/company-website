     var vapiInstance = null;
      const assistant = "71bfd870-839f-49ce-afc4-b4af62ce4e6e";
      const apiKey = "fe0ca0ed-1b37-4465-af11-e4e01bd2b3f9";
      const buttonConfig = {
        position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
        offset: "40px", // decide how far the button should be from the edge
        width: "50px", // min-width of the button
        height: "50px", // height of the button
        idle: { // button state when the call is not active.
          color: `rgb(93, 254, 202)`, 
          type: "pill", // or "round"
          title: "Have a quick question?", // only required in case of Pill
          subtitle: "Talk with our AI Voice Agent", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
        },
        loading: { // button state when the call is connecting
          color: `rgb(93, 124, 202)`,
          type: "pill", // or "round"
          title: "Connecting...", // only required in case of Pill
          subtitle: "Please wait", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
        },
        active: { // button state when the call is in progress or active.
          color: `rgb(255, 0, 0)`,
          type: "pill", // or "round"
          title: "Call is in progress...", // only required in case of Pill
          subtitle: "End the call.", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
        },
      };
      
    
      (function (d, t) {
        var g = document.createElement(t),
          s = d.getElementsByTagName(t)[0];
        g.src =
          "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);
    
        g.onload = function () {
          vapiInstance = window.vapiSDK.run({
            apiKey: apiKey,
            assistant: assistant, j        
            config: buttonConfig, // optional
          });
        };
      })(document, "script");