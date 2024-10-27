import { Email, EmailListType } from "../../types";
import EmailCard from "../EmailCard/EmailCard";

const EmailList = ({
  list,
  handleEmailOpen,
}: {
  list: EmailListType;
  handleEmailOpen: (id: string, emailData: Email) => void;
}) => {
  return (
    <div className="email_list">
      {list?.map((email) => {
        return (
          <EmailCard
            key={email.id}
            emailData={email}
            handleEmailClick={handleEmailOpen}
          />
        );
      })}
    </div>
  );
};

export default EmailList;
