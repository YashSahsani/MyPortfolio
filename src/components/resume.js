import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import pic from './yash.jfif';
class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="data:image/png;base64,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"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Yash Sahsani</h2>
            <h4 style={{color: 'grey'}}>Pentester and Blockchain Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>To succeed in an environment of growth excellence and earn a job which challenges & helps me achieve
personal as well as organizational goals</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>+919824502933</p>
            <h5>Email</h5>
            <p>yashsahsani5@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={'current'}
              schoolName="Charotar University of science and technology"
              schoolDescription="SECURED 8.7 CGPA UNTIL 4RD SEMESTER IN B.TECH I.T"
               />

               <Education
                 startYear={2014}
                 endYear={2018}
                 schoolName="Rosary High school"
                 schoolDescription="Higher Secondary Secondary Studies"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Internship</h2>

            <Experience
              startYear={'Arpil-2020'}
              endYear={'June-2020'}
              jobName="Blockchain Developer Intern at Cilans System"
              jobDescription1="• Built a Car Selling platform using hyperledger with the help of IBM Blockchain Service and its extension in vscode."
              jobDescription2="• Designed a second network for implementing Royalty Distribution In Entertainment Industry and wrote the chain-code in nodejs ."
              jobDescription3= "• Than deployed both projects to the IBM Cloud and created API and GUI to interact with the IBM Blockchain Service."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={80}
                />
                <Skills
                  skill="Hyperledger"
                  progress={65}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="Pentesting"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
