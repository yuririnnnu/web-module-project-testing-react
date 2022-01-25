import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testData = [{
        "id": 553946,
        "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 49,
        "rating": {
        "average": 8.2
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/342/855786.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    },
    {
        "id": 578663,
        "url": "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name": "Chapter Two: The Weirdo on Maple Street",
        "season": 1,
        "number": 2,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 56,
        "rating": {
        "average": 8.2
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855787.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/342/855787.jpg"
        },
        "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
    },
    {
        "id": 578664,
        "url": "https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
        "name": "Chapter Three: Holly, Jolly",
        "season": 1,
        "number": 3,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 52,
        "rating": {
        "average": 8.7
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855788.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/342/855788.jpg"
        },
        "summary": "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
    }]
const testImg = {
        id: 1,
        name: "",
        image: null,
        season: 1,
        number: 1,
        summary: "test img",
        runtime: 1,
}

test("renders without error", () => {
    render(<Episode episode={[]}/>)
});

test("renders the summary test passed as prop", ()=>{
    const {rerender} = render(<Episode episode={testData[0]}/>)
    const summary1 = screen.queryByText(/a young boy mysteriously disappears/i);
    expect(summary1).toBeInTheDocument()
    expect(summary1).toHaveTextContent(/a young boy mysteriously disappears/i)
    expect(summary1).toBeTruthy()
    
    rerender(<Episode episode={testData[1]}/>)
    const summary2 = screen.queryByText(/while the search for the missing/i);
    expect(summary2).toBeInTheDocument()

    rerender(<Episode episode={testData[2]}/>)
    const summary3 = screen.queryByText(/while Nancy looks for a missing Barbara/i);
    expect(summary3).toBeInTheDocument()
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testImg}/>);
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument();
});
