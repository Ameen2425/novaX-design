import React, { useState, useEffect } from "react";
import "./DealTimer.css";

const DealTimer = () => {
  // Live ticking countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, "0");

  return (
    <div className="deal-timer-strip-wrapper">
      <div className="deal-timer-strip">
        {/* LEFT: COUNTDOWN TIMER */}
        <div className="deal-timer-block">
          <span className="deal-timer-label">LIMITED-TIME OFFER</span>
          <div className="deal-countdown-row">
            <div className="countdown-unit">
              <strong className="countdown-num">{formatNum(timeLeft.days)}</strong>
              <span className="countdown-tag">DAYS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <strong className="countdown-num">{formatNum(timeLeft.hours)}</strong>
              <span className="countdown-tag">HRS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <strong className="countdown-num">{formatNum(timeLeft.minutes)}</strong>
              <span className="countdown-tag">MINS</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-unit">
              <strong className="countdown-num">{formatNum(timeLeft.seconds)}</strong>
              <span className="countdown-tag">SECS</span>
            </div>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="deal-strip-divider"></div>

        {/* RIGHT: 4 PILLARS */}
        <div className="deal-pillars-grid">
          {/* Pillar 1 */}
          <div className="deal-pillar-item">
            <div className="deal-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div className="deal-pillar-text">
              <strong>PREMIUM QUALITY</strong>
              <p>Carefully selected products</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="deal-pillar-item">
            <div className="deal-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="deal-pillar-text">
              <strong>SECURE PAYMENT</strong>
              <p>100% secure checkout</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="deal-pillar-item">
            <div className="deal-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
            </div>
            <div className="deal-pillar-text">
              <strong>24/7 SUPPORT</strong>
              <p>We're here to help</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="deal-pillar-item">
            <div className="deal-pillar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="1" y="3" width="15" height="13" rx="2"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div className="deal-pillar-text">
              <strong>FAST DELIVERY</strong>
              <p>Quick & reliable delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealTimer;
