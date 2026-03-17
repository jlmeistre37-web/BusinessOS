export default function App() {
  return (
    <div style={{
      backgroundColor: "#0f172a",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        BusinessOS
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#94a3b8" }}>
        All-in-one software for service businesses
      </p>

      <button style={{
        backgroundColor: "#3b82f6",
        border: "none",
        padding: "12px 24px",
        color: "white",
        fontSize: "16px",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Get Started
      </button>

    </div>
  )
}
