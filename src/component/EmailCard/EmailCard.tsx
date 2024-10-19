import React from "react";
import { Email } from "../../types";
import { formatTimestamp } from "../../utils";

const EmailCard = ({ emailData }: { emailData: Email }) => {
  const avatarText = emailData.from.name[0].toUpperCase();
  return (
    <div className="email_card">
      <div className="avatar">
        <span className="avatar-text">{avatarText}</span>
      </div>
      <div className="email_card_right">
        <div>
          <p>
            From:{" "}
            <span className="text-500">{`${emailData.from.name} <${emailData.from.email}>`}</span>
          </p>
          <p>
            Subject: <span className="text-500">{emailData.subject}</span>
          </p>
        </div>

        <p>{emailData.short_description}</p>
        <span className="email_time">{formatTimestamp(emailData.date)}</span>
      </div>
    </div>
  );
};

export default EmailCard;
