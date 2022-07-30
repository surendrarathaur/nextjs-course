import { Grid, Card, Typography, Box } from "@mui/material"
import { User } from '../../interfaces/User'
import Datatable from '../../components/DataTable'

type Props = {
  users: User[]
}

const users = ({ users }: Props) => {
  return <>
    <Grid container sx={{ height: '100%' }}>
      <Card  sx={{width:'100%', height:'100%'}}>
        <Box sx={{ml:'15px'}}>
          <Typography variant="h5" component="div" sx={{textAlign:'center'}}>
            User List
          </Typography>
          <hr />
          {
            // users.map((user: any) => {
            //   return <div key={user.id}>
            //     <p><b>Name</b> : {user.name}</p>
            //     <p><b>User Name</b> : {user.username}</p>
            //     <p><b>Email</b> : {user.email}</p>
            //     <p><b>Address City</b> : {user.address.city}</p>
            //     <p><b>Phone</b> : {user.phone}</p>
            //     <p><b>Website Name</b> : {user.website}</p>
            //     <p><b>Company Name</b>: {user.company.name}</p>
            //     <hr />
            //   </div>
            // })
          }
          <Datatable users={users}/>
        </Box>
      </Card>
    </Grid>
  </>
}

export default users

export async function getStaticProps() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await users.json()
  //console.log(data)
  return {
    props: {
      users: data
    }
  }
}
