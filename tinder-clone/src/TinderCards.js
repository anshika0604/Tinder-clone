import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://static.politico.com/33/29/9a4dd4c54c04bb2992509259fd18/twitter-musk-europe-showdown-17525.jpg",
        },
        {
            name: 'Jeff Bezos',
            url: "https://www.theladders.com/wp-content/uploads/jeff-bezos-ceo-profile-1490x838.jpg",
        },
        {
            name: 'Ellen',
            url: "https://e3.365dm.com/20/08/768x432/skynews-ellen-degeneres-golden-globes_5070536.jpg?20200818085258",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    };

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards