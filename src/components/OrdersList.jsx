/* eslint-disable react/prop-types */
import BasicTable from "./DashboardTable";

const orderListsData = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "889 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8567 Fride Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "765 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weinman Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottsberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Joh",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dottie Miles",
    address: "124 Lyla Forge Suite 375",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
  {
    id: "00010",
    name: "Christine Brooks",
    address: "889 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00011",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00012",
    name: "Darrell Caldwell",
    address: "8567 Fride Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00013",
    name: "Gilbert Johnston",
    address: "765 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00014",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00015",
    name: "Alfred Murray",
    address: "543 Weinman Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00016",
    name: "Maggie Sullivan",
    address: "New Scottsberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00017",
    name: "Rosie Todd",
    address: "New Joh",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00018",
    name: "Dottie Miles",
    address: "124 Lyla Forge Suite 375",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

const EmailList = () => {

  return (
    <>
      <div className="email-list-container flex-grow overflow-hidden">
        <div className="space-y-2">
            <BasicTable
              header={['id', 'name', 'address', 'date', 'type', 'status']}
              data={orderListsData}
            />
        </div>
      </div>
    </>
  );
};

export default EmailList;