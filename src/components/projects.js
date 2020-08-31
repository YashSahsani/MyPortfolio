import React, { Component } from 'react';
import {  Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1572949919003-5e453f77cb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'}} >MediaChain</CardTitle>
            <CardText>
            It was a hyperledger based project for distirbuting royalty to the actors and writer in entertaiment industry.
            </CardText>
            <CardActions border>
              <Button colored href="https://medium.com/@18it112/royalty-distribution-in-entertainment-industry-using-hyper-ledger-8845d5870043s">Medium</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="link" href="https://medium.com/@18it112/royalty-distribution-in-entertainment-industry-using-hyper-ledger-8845d5870043" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80) center / cover'}} >Analysis of Malicious Programs</CardTitle>
            <CardText>
            I did static and dynamic analysis of malicious programs that I created for learning purpose.Using debuggers and disassembler.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="link" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1561631918-0e0d6af260af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) center / cover'}} >NVCoins</CardTitle>
            <CardText>
            As it said to learn something you need learn by doing it.So I wanted to learn about blockchain and bitcoin so I tried to make replicate of it on a smaller scale.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/YashSahsani/NVCoins" >GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="link" href="https://github.com/YashSahsani/NVCoins"/>
            </CardMenu>
          </Card>
        </div>


      )
    }
  }



  render() {
    return(
      <div>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
