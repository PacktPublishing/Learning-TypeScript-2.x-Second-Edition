import { InjectionToken } from "@angular/core";
import { MovieService, ActorService } from "../interfaces";

export const ACTOR_SERVICE = new InjectionToken<MovieService>("ActorService");
export const MOVIE_SERVICE = new InjectionToken<MovieService>("MovieService");
