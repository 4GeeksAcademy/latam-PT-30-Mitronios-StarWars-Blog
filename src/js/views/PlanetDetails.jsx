import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {

  const { actions, store } = useContext(Context)
  const params = useParams() //const {id} = useParams()
  useEffect(() => {
    actions.getPlanet(params.id)
  }, [])
  console.log(store.hero)
  return (
    <React.Fragment>
      <div className="media container bg-dark text-light">
        {params.id == 1 ?
          <img className="mr-3"
            src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
            alt={store.planet.properties?.name} />
          :
          <img className="mr-3"
            src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"}
            alt={store.planet.properties?.name} />
        }
        <div className="media-body">
          <h5 className="mt-0">{store.planet.properties?.name}</h5>
          {store.planet.description}
        </div>
      </div>
      <div className="container bg-dark">
        <ul className="row list-group-horizontal mt-3">
          <li className="col-2 list-group-item bg-dark text-light">
            Height:
          </li>
          <li className="col-2 list-group-item bg-dark text-light">
            Mass:
          </li>
          <li className="col-2 list-group-item bg-dark text-light">
            Hair color:
          </li>
          <li className="col-2 list-group-item bg-dark text-light">
            Skin color:
          </li>
          <li className="col-2 list-group-item bg-dark text-light">
            Eye color:
          </li>
          <li className="col-2 list-group-item bg-dark text-light">
            Gender:
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

// {store.hero(
//   item.height,
//   item.mass,
//   item.hair_color,
//   item.skin_color,
//   item.eye_color
//   item.gender, 
// )}