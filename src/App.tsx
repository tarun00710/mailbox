import { useEffect, useState } from "react";
import "./App.css";
import EmailList from "./component/EmailList/EmailList";
import { Email, EmailListType, FilterType } from "./types";
import EmailDetail from "./component/EmailDetail/EmailDetail";
import Filters from "./component/FilterLabel/Filters";

function App() {
  const [emailList, setEmailList] = useState<EmailListType>([]);
  const [filteredEmailList, setFilteredEmailList] = useState<EmailListType>([]);
  const [isEmailOpened, setIsEmailOpened] = useState<boolean>(false);
  const [emailDetails, setEmailDetails] = useState<Email>();

  useEffect(() => {
     fetch("https://flipkart-email-mock.now.sh/?page=")
      .then((res) => res.json())
      .then((list) => {
        const emailList = list?.list?.map((emails: EmailListType) => ({
          ...emails,
          isRead: false,
          isFavourite: false,
        }));
        setEmailList(emailList);
        setFilteredEmailList(emailList);
      });
  }, []);

  const onFilterEmailList = (filterType: FilterType) => {
    let filteredEmails;
    if (filterType === "READ")
      filteredEmails = emailList?.filter((email) => !!email.isRead);
    else if (filterType === "UNREAD")
      filteredEmails = emailList?.filter((email) => !email.isRead);
    else if (filterType === "FAVORITES")
      filteredEmails = emailList?.filter((email) => email.isFavourite);
    else filteredEmails = emailList;
    setFilteredEmailList(filteredEmails);
  };

  const getEmailBody = (id: string, emailData: Email) => {
    fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEmailDetails({ ...data, ...emailData });
        setIsEmailOpened(true);
        setEmailList((prevEmail) => {
          return prevEmail.map((email) =>
            email.id === id ? { ...email, isRead: true } : email
          );
        });
        setFilteredEmailList((prevEmail) => {
          return prevEmail.map((email) =>
            email.id === id ? { ...email, isRead: true } : email
          );
        });
      });
  };

  const handleEmailOpen = (id: string, emailData: Email) => {
    getEmailBody(id, emailData);
  };

  const handleFavoriteClick = (id: string) => {
    setEmailList((prevEmail) => {
      return prevEmail.map((email) =>
        email.id === id ? { ...email, isFavourite: true } : email
      );
    });
    setFilteredEmailList((prevEmail) => {
      return prevEmail.map((email) =>
        email.id === id ? { ...email, isFavourite: true } : email
      );
    });
  };

  return (
    <div className="container_wrapper">
      <Filters onFilterClick={onFilterEmailList} />
      <div className="container">
        <div className="container_left">
          {!!filteredEmailList.length ? (
            <EmailList
              list={filteredEmailList}
              handleEmailOpen={handleEmailOpen}
            />
          ) : (
            <p>No emails found...</p>
          )}
        </div>
        {isEmailOpened ? (
          <div className="container_right">
            <EmailDetail
              emailDetails={emailDetails}
              handleFavoriteClick={handleFavoriteClick}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
