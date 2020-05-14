import React ,{Fragment} from 'react'
import Card from "./Card";

const Cardlist = ({robots}) => {
  return (
      <Fragment>
        {
          robots.map(user => {
            return <Card 
            key={user.id} 
            data={user} />
            //return <Card id={user.id} name={user.name} email={user.email} username={user.username}/>
          })
        }
      </Fragment>
  )
}
export default Cardlist;