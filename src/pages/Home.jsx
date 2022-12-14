import { StatsList } from '../components/stats/StatsList';
import { AuthorizedLayout, Layout } from '../layouts';

export const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <AuthorizedLayout>
          <div className="mt-8">
            <StatsList></StatsList>
          </div>
        </AuthorizedLayout>
      </div>
    </Layout>
  );
};

// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button } from "../components/common/ui";
// import { Layout } from "../layouts";
// import { add, sub, addNumber } from "../store/actions";
// import { login } from "../store/actions/authActions";

// export const Home = () => {
//   const dispatch = useDispatch();
//   const count = useSelector(({ counter }) => {
//     return counter;
//   });

//   return (
//     <Layout>
//       <div className="container mx-auto px-4">
//         <h1>HOMEPAGE</h1>
//         <Link to="/play" title="Play a game">
//           <Button element="span">Play</Button>
//         </Link>
//         <div className="mt-11">
//           <button
//             type="button"
//             onClick={() => {
//               dispatch(sub());
//             }}
//           >
//             -
//           </button>
//           <span>{count}</span>
//           <button
//             type="button"
//             onClick={() => {
//               dispatch(add());
//             }}
//           >
//             +
//           </button>
//         </div>

//         <div className="mt-11">
//           <button
//             type="button"
//             onClick={() => {
//               dispatch(addNumber(5));
//             }}
//           >
//             Add 5
//           </button>
//         </div>

//         <div className="mt-11">
//           <button type="button" onClick={() => dispatch(login())}>
//             Set Carol
//           </button>
//         </div>

//         {/* <Button
//           title="Click"
//           type="button"
//           onClick={() => {
//             alert("welcome");
//           }}
//         >
//           button
//         </Button> */}
//       </div>
//     </Layout>
//   );
// };
