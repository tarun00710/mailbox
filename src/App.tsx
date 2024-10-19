import { useEffect, useState } from "react";
import "./App.css";
import EmailList from "./component/EmailList/EmailList";
import { EmailListType, FilterType } from "./types";
import Filters from "./component/FilterLabel/filters";
import EmailDetail from "./component/EmailDetail/EmailDetail";

function App() {
  const [emailList, setEmailList] = useState<EmailListType>([]);
  const [filteredEmailList, setFilteredEmailList] = useState<EmailListType>([]);
  const [isEmailOpened, setIsEmailOpened] = useState<boolean>(false);
  const [emailDetails,setEmailDetails] = useState()

  useEffect(() => {
    const getEmail = fetch("https://flipkart-email-mock.now.sh/?page=")
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

  return (
    <div>
      <Filters onFilterClick={onFilterEmailList} />
      <EmailList list={filteredEmailList} />
      {isEmailOpened ? <EmailDetail emailDetails={emailDetails} /> : ""}
    </div>
  );
}

export default App;
