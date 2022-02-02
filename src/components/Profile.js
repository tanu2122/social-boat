import styled from 'styled-components';
import ReactPlayer from 'react-player'

function Profile({user, video}) {  
return <UserProfile>
    <Main>
    {
        user.map((val, key) => {
           return ( <>
            <Image>
            <img src={val.img} alt=""/>
        </Image>
        <Content>
            <h2>{val.name}</h2>
            <p style={{width: "300px"}}>{val.bio}</p>
            <About>
                <h4>40 Videos</h4>
                <h4>20 Followers</h4>
                <h4>20 Following</h4>
            </About>
        </Content>
           </> )
        })
    } 
    </Main>
    <Items>
    {
        video.map((val, key) => {
            return ( <>
                    <ReactPlayer 
                        width='30%' 
                        height='30%' 
                        url={val.video} 
                        playing="true"
                        volume="0" 
                        loop="true"
                        muted>
                    </ReactPlayer>
            </>)
        })
    }
    </Items>
</UserProfile>

}


export default Profile;

const UserProfile = styled.div`
    `
const Main = styled.div`
    margin: 10px auto;
    max-width: 600px;
    height: 210px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid grey;`
const Image = styled.div`
align-self: center;
img {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    
}
    `
const Content = styled.div``
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `
const About = styled.div`
    display: flex;
    justify-content: space-between;
    width: 110%;`

