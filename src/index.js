//import the react and reactdom libs
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <CommentDetail author="ammar" time="6:00" comment=" good good" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="ali" time="7:00" comment=" very good" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="ahmed" time="8:00" comment=" very very good" />
      </ApprovalCard>
    </div>
  );
};

//take the react function and show it
ReactDOM.render(<App />, document.getElementById("root"));
