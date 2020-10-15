import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Headers, Response } from "@angular/http";

@Injectable()
export class GetdataService {
  constructor(public http: Http) {}

  getSpark() {
    return this.http
      .get(
        "http://localhost:3030/Match?query=SELECT ?subject ?predicate ?object WHERE {   ?subject ?predicate ?object } LIMIT 25&output=json"
      )
      .map((res) => res.json());
  }

  getGoalkeeper() {
    return this.http
      .get(
        "http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0ASELECT DISTINCT ?c WHERE {  ?c ?subClassOf obo:Goalkeeper .}&output=json"
      )
      .map((res) => res.json());
  }

  getallplayer() {
    return this.http
      .get(
        "http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0ASELECT DISTINCT ?c WHERE {  {?c ?subClassOf obo:Goalkeeper .} UNION {?c ?subClassOf obo:Defender .} UNION {?c ?subClassOf obo:Striker .} UNION {?c ?subClassOf obo:Midfielder .}}&output=json"
      )
      .map((res) => res.json());
  }
  getPostionofPlayer(player) {
    return this.http
      .get(
        "http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0ASELECT DISTINCT ?NamedIndividual WHERE {  obo:" +
          player +
          " a ?NamedIndividual} limit 1&output=json"
      )
      .map((res) => res.json());
  }

  geWebService(table) {}
}
