import { Email } from "../../types";
import { formatTimestamp } from "../../utils";

const EmailDetail = ({
  emailDetails,
  handleFavoriteClick,
}: {
  emailDetails?: Email;
  handleFavoriteClick: (id: string) => void;
}) => {
  const avatarText = emailDetails && emailDetails.from.name[0].toUpperCase();

  return (
    <>
      {" "}
      {emailDetails ? (
        <div className="email_body">
          <div className="avatar">
            <span className="avatar-text">{avatarText}</span>
          </div>
          <div className="content">
            <div className="header_section">
              <h2>{emailDetails.subject}</h2>
              <p
                className="filter_label favorite"
                onClick={() => handleFavoriteClick(emailDetails.id)}
              >
                Mark as favorite
              </p>
            </div>
            <p className="email_time">{formatTimestamp(emailDetails.date)}</p>
            <div className="email-detail">
              <div
                className="email-content"
                dangerouslySetInnerHTML={{ __html: emailDetails.body || "" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>No Details Found ...</p>
      )}
    </>
  );
};

export default EmailDetail;
