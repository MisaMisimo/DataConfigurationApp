import React, { useId, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
export default function SshConfig({ kind }) {
    const DATA = [
        {
            id: 'sshPortName1',
            label: 'P1',
            username: 'user',
            password: 'password',
        },
        {
            id: 'sshPortName2',
            label: 'P2',
            username: 'user2',
            password: 'password2',
        },
        {
            id: 'sshPortName3',
            label: 'P3',
            username: 'user3',
            password: 'password3',
        }
    ]

    function addNewSshConfiguration() {
        console.log('Adding new sshConfig')
    }
    const [sshData, setSshData] = useState(DATA);


    console.log(sshData);
    sshData.map(sshConfigCell => {
        { console.log(sshConfigCell) }
    })
    return (
        <>
            <Typography component="p" variant="p" className="workspace-eyebrow">Ssh Configs</Typography>
            {sshData.map(sshConfigCell => {
                { console.log('Trying out printing sshConfigcell') }
                { console.log(sshConfigCell) }
                <Card>
                    <CardContent>
                        <Typography variant="h1" >{sshConfigCell.label}</Typography>
                        <Typography variant="h1" >AAAAA</Typography>
                    </CardContent>
                </Card>

            })}

            <Card onClick={addNewSshConfiguration} style={{ cursor: 'pointer' }}>
                <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Typography variant="h3" style={{ textAlign: 'center', justifyContent: 'center' }}>+</Typography>
                </CardContent>
            </Card>
        </>
    )
}