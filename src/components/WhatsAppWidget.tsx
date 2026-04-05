import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/919835235672?text=Hi%20Yuvraj!%20I%20saw%20your%20portfolio..."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "110px",
        right: "40px",
        backgroundColor: "#25d366",
        color: "white",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        boxShadow: "0 5px 15px rgba(37, 211, 102, 0.4)",
        zIndex: 9999,
        cursor: "pointer",
        transition: "all 0.3s ease",
        animation: "pulse 2s infinite"
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Chat on WhatsApp"
    >
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
        `}
      </style>
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppWidget;
