import './css/App.css';
import Home from "./pages/Home";

function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((actualData) => {
  //       setData(actualData["products"]);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // return (
  //   <div className="App">
  //     <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  //       Launch demo modal
  //     </button>


  //     <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
  //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             ...
  //           </div>
  //           <div className="modal-footer">
  //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
  //             <button type="button" className="btn btn-primary">Save changes</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>


  //     {loading && <div>A moment please...</div>}
  //     {error && (
  //       <div>{`There is a problem fetching the post data - ${error}`}</div>
  //     )}
  //     <div className="row">
        
  //     {data &&
  //       data.map(({ id, title, description, category, images }) => (
  //         <div className="col-sm-4">
  //           <div className="card" key={id} style={{margin: 10}}>
  //             <div className="card-body">
  //             <img src={images[0]} style={{width: "100%"}} />
  //               <h5 className="card-title">{title}</h5>
  //               <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
  //               <p className="card-text">{description}</p>
  //               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  //                 Launch demo modal
  //               </button>
  //             </div>
  //           </div>
  //         </div>
          
  //     ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

