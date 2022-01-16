import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import { Movie } from "../../pages/types/interfaces";

import { CONFIGS } from "./emailkeys";

export async function sendEmail(movie: Movie, email: string) {
  return emailjs.send(
    CONFIGS.SERVICE_ID,
    CONFIGS.TEMPLATE_ID,
    {
      email,
      subgget: movie.title,
      movie_image: movie.info.image_url,
      movie_title: movie.title,
      movie_release_date: movie.info.release_date
        ? format(new Date(movie.info.release_date).getTime(), "MMM dd yyyy")
        : "",
    },
    CONFIGS.USER_ID
  );
}
