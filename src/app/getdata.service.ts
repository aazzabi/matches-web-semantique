import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {
  constructor(public http: Http) {
  }

  getSpark() {
    return this.http
      .get(
        'http://localhost:3030/Match?query=SELECT ?subject ?predicate ?object WHERE {   ?subject ?predicate ?object } LIMIT 25&output=json'
      )
      .map((res) => res.json());
  }

  getTeams() {
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0A' +
        'SELECT DISTINCT ?team ?teamName ' +
        'WHERE { { ?team ?subClassOf obo:Team}' +
        '{ ?team obo:teamName ?teamName}' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

  getGoalkeeper() {
    return this.http
      .get(
        // tslint:disable-next-line:max-line-length
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0ASELECT DISTINCT ?c WHERE {  ?c ?subClassOf obo:Goalkeeper .}&output=json'
      )
      .map((res) => res.json());
  }

  getallplayer() {
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0A' +
        'SELECT DISTINCT ?c ?nom ' +
        'WHERE {  {?c obo:nom ?nom} ' +
        '{?c ?subClassOf obo:Goalkeeper .} ' +
        'UNION {?c ?subClassOf obo:Defender .} ' +
        'UNION {?c ?subClassOf obo:Striker .} ' +
        'UNION {?c ?subClassOf obo:Midfielder .}' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

  getallplayerByTeam(team: any) {
    console.log(team,' service 55');
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0A' +
        'SELECT DISTINCT ?p ?team ?teamName ?playerName ' +
        'WHERE {' +
            '{?team ?subClassOf obo:Team}' +
            '{?team obo:teamName ?teamName}' +
            '{?p obo:nom ?playerName}' +
            '{?p ?subClassOf obo:Goalkeeper}' +
            'UNION {?c ?subClassOf obo:Defender .}' +
            'UNION {?c ?subClassOf obo:Midfielder .}' +
            'UNION {?c ?subClassOf obo:Striker .}' +
            '{?p ?plays_for ?team}' +
            'FILTER regex (?teamName , "^(' + team + ')")' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

  search(v: string) {
    console.log(v, 'v');
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0A' +
        'SELECT DISTINCT ?c ?age ?nom ' +
        'WHERE {  {?c obo:nom ?nom} ' +
        '{?c obo:age ?age} ' +
        '{?c ?subClassOf obo:Goalkeeper .} ' +
        'UNION {?c ?subClassOf obo:Defender .} ' +
        'UNION {?c ?subClassOf obo:Striker .} ' +
        'UNION {?c ?subClassOf obo:Midfielder .}' +
        'FILTER regex (lcase(?nom) , "^(' + v + ')")' +
        '}&output=json'
      )
      .map((res) => res.json());
  }

  getPostionofPlayer(player) {
    console.log(player);
    return this.http
      .get(
        'http://localhost:3030/Match?query=PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0A PREFIX obo%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fplanettech%2Fontologies%2F2018%2F11%2Funtitled-ontology-14%23%3E%0D%0A%0D%0ASELECT DISTINCT ?NamedIndividual WHERE {  obo:' +
        player.name +
        ' a ?NamedIndividual} limit 1&output=json'
      )
      .map((res) => res.json());
  }

  geWebService(table) {
  }
}
