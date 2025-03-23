import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");

  // Step 1: Request Password Reset Link
  const handleResetRequest = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the reset link.");
    }
    setLoading(false);
  };

  // Step 2: Update Password When User Clicks Reset Link
  const handleUpdatePassword = async () => {
    if (!accessToken) {
      setMessage("Invalid or expired reset token.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Password updated successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Reset Password</h2>

      {!accessToken ? (
        <>
          <p>Enter your email to receive a password reset link:</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleResetRequest} disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </>
      ) : (
        <>
          <p>Enter your new password:</p>
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleUpdatePassword} disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;