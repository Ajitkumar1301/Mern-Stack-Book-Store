import { useEffect, useState } from 'react';
import Spinner from '../Components/Spinner';
import { MdOutlineAddBox } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getURL } from '../config';
import BooksTable from '../Components/Home/BooksTable';
import BooksCard from '../Components/Home/BooksCard';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showType, setShowType] = useState('table');

	const FetchDetails = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(getURL);

			setBooks(data.books);
			setLoading(false);
		} catch (err) {
			console.log(err.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		FetchDetails();
	}, []);

	console.log(books, 'books');
	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('table')}
				>
					Table
				</button>
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('card')}
				>
					Card
				</button>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8">Books List</h1>
				<Link to="/books/create">
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{loading ? (
				<Spinner />
			) : showType === 'table' ? (
				<BooksTable books={books} />
			) : (
				<BooksCard books={books} />
			)}
		</div>
	);
};

export default Home;
