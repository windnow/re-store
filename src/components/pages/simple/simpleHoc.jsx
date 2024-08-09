import withBookstoreService from "../../hoc/with-bookstore-service";

const SimpleHOC = (props) => {

    const { bookstoreService:{getBooks:b} } = props;

    const list = b().map( (v) => <li>{v}</li>)



    return (
        <div>
            <h1>Use HOC to update component props</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}
export default withBookstoreService()(SimpleHOC);