import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVedios from "../components/ExerciseVedios";
import SimilarExerciseVedios from "../components/SimilarExerciseVedios";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExcerciseDetail = () => {
  const [exerciseDetail, setExcerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearch =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExcerciseDetail(exerciseDetailData)  
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVedios />
      <SimilarExerciseVedios />
    </Box>
  );
};

export default ExcerciseDetail;
