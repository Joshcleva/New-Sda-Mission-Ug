import React from 'react';

function Downloadable() {

    	const [videoUrl, setVideoUrl] = useState(' ');
			const [id, setId] = useState(' ');

			useEffect(() => {
				const id = videoUrl.replace('https://www.youtube.com/watch?v=', ' ');
				setId(id);
			}, [videoUrl]);

    return (
			<div>
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						onChange={(e) => setVideoUrl(e.target.value)}
						value={videoUrl}
						type='text'
						placeholder='Download This Song here'
					/>
				</form>
			</div>
		);
}

export default Downloadable
