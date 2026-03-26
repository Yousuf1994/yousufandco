import { useEffect, useRef, useState } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region: string;
}

export function HubSpotForm({ portalId, formId, region }: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate a unique target ID
    const targetId = `hs-form-target-${formId}`;

    const renderForm = () => {
      if (!(window as any).hbspt) return;
      
      // Clear container to prevent duplicate forms in React Strict Mode
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        
        // Re-create the target div
        const targetDiv = document.createElement("div");
        targetDiv.id = targetId;
        containerRef.current.appendChild(targetDiv);

        // Render the HubSpot form into the target
        (window as any).hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: `#${targetId}`
        });
      }
    };

    // Load the HubSpot v2 script globally
    const scriptId = "hubspot-v2-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);
      
      script.addEventListener("load", () => {
        setIsLoaded(true);
        renderForm();
      });
    } else {
      if ((window as any).hbspt) {
        setIsLoaded(true);
        renderForm();
      } else {
        script.addEventListener("load", () => {
          setIsLoaded(true);
          renderForm();
        });
      }
    }

  }, [portalId, formId, region]);

  return (
    <div className="w-full min-h-[500px] p-2 rounded-lg">
      {!isLoaded && <div className="text-white/50 text-center py-20 animate-pulse">Loading form...</div>}
      <div ref={containerRef} className="w-full"></div>
    </div>
  );
}
