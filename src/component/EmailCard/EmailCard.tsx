import { Email } from "../../types";
import { formatTimestamp } from "../../utils";

const EmailCard = ({
  emailData,
  handleEmailClick,
}: {
  emailData: Email;
  handleEmailClick: (id: string, emailData: Email) => void;
}) => {
  const avatarText = emailData.from.name[0].toUpperCase();
  return (
    <div
      className="email_card"
      onClick={() => handleEmailClick(emailData.id, emailData)}
    >
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
        <div className="email_card_footer">
          <span className="email_time">{formatTimestamp(emailData.date)}</span>
          {emailData.isFavourite && (
            <span className="email_time email_favorite">Favorite</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
