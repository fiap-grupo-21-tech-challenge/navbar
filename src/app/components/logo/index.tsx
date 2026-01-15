import "./styles.css";
import { FiTrendingUp } from "react-icons/fi";

export default function Logo({
  showText = true,
  name = "FinanceApp",
  className = "",
  iconSize = 18,
  textColor = "black",
}) {
  return (
    <div
      aria-label={name}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-sm">
        {/* <FiTrendingUp size={iconSize} className="text-white" /> */}
        <FiTrendingUp size={iconSize} color="#fff" />
      </span>

      {showText && (
        <span
          className="text-xl max-sm:text-lg font-semibold text-slate-900"
          style={{ color: textColor }}
        >
          {name}
        </span>
      )}
    </div>
  );
}
