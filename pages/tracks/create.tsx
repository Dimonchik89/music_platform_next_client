import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout"
import StepWrapper from "../../components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "../../components/FileUpload";
import { useInput } from "../../hooks/useInput";
import axios from "axios";
import { useRouter } from "next/router";

const Create = () => {
    const  [activeSteap, setActiveSteap] = useState(0)
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput("")
    const artist = useInput("")
    const text = useInput("")
    const router = useRouter()

    const next = () => {
        if(activeSteap !== 2) {
            setActiveSteap(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append("name", name.value)
            formData.append("text", text.value);
            formData.append("artist", artist.value)
            formData.append("picture", picture)
            formData.append("audio", audio)
            axios.post("http://localhost:5000/tracks", formData)
                .then(res => router.push("/tracks"))
                .catch(e => console.log(e))
        }
    }

    const back = () => {
        setActiveSteap(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeSteap}>
                {
                    activeSteap === 0 && 
                    <Grid container direction="column" style={{padding: 20}}>
                        <TextField 
                            {...name}
                            style={{marginTop: 10}} 
                            label="Название трека"
                        />
                        <TextField 
                            {...artist}
                            style={{marginTop: 10}} 
                            label="Имя автора"
                        />
                        <TextField 
                            {...text}
                            style={{marginTop: 10}} 
                            multiline label="Текст песни" 
                            rows={3}
                        />
                    </Grid> 
                }
                {
                    activeSteap === 1 && <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Загрузите обложку</Button>
                    </FileUpload>
                }
                {
                    activeSteap === 2 && <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Загрузите трек</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button
                    disabled={activeSteap === 0}
                    onClick={() => back()}
                >
                    Назад
                </Button>
                <Button
                    onClick={() => next()}
                >
                    Вперед
                </Button>
            </Grid>
        </MainLayout>
    )
}
export default Create;