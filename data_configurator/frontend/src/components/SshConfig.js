import React, { useId, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Stack from "@mui/material";
export default function SshConfig({ kind }) {
    const DATA = [
        {
            id: 1,
            label: 'P1',
            username: 'user',
            password: 'password',
        },
        {
            id: 2,
            label: 'P2',
            username: 'user2',
            password: 'password2',
        },
        {
            id: 3,
            label: 'P3',
            username: 'user3',
            password: 'password3',
        }
    ]

    function addNewSshConfiguration() {
        console.log('Adding new sshConfig')
    }
    function selectSshConfig(sshConfigId) {
        console.log(`selecting sshConfig with Id ${sshConfigId}`);
    }
    const [sshData, setSshData] = useState(DATA);


    console.log(sshData);
    sshData.map(sshConfigCell => {
        { console.log(sshConfigCell) }
    })
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '4px'
        }}>
            {sshData.map(sshConfigCell => {
                { console.log('Trying out printing sshConfigcell') }
                { console.log(sshConfigCell) }
                return (<Card key={sshConfigCell.id} style={{
                    margin: '0px 0px 8px 0px',
                    cursor: 'pointer'
                }}
                    onClick={() => { selectSshConfig(sshConfigCell.id) }}>
                    <CardContent>
                        <Typography variant="p" >ID: {sshConfigCell.id}</Typography>
                        <Typography variant="p" >Label: {sshConfigCell.label}</Typography>
                        <Typography variant="p" >Username: {sshConfigCell.username}</Typography>
                        <Typography variant="p" >Password: {sshConfigCell.password}</Typography>
                    </CardContent>
                </Card>);

            })}

            <Card onClick={() => { addNewSshConfiguration() }} style={{ cursor: 'pointer' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant="h3" style={{ textAlign: 'center', justifyContent: 'center' }}>+</Typography>
                </CardContent>
            </Card>
        </div>
    )
}