import {Component, OnInit} from '@angular/core';
import {GetdataService} from '../getdata.service';
import {Player} from '../Models/Player';

@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css'],
})
export class StadeComponent implements OnInit {
  //Goalkeeper
  addplayer = false;
  search = '';
  allpayer: Player[] = [];
  allpayerMatch = new Array();
  i: number = 1;
  scoreFormation: number[] = [0, 0, 0, 0, 0, 0, 0];
  Defender = 'Defender';
  Striker = 'Striker';
  Goalkeeper = 'Goalkeeper';
  Midfielder = 'Midfielder';

  constructor(public sparql: GetdataService) {
    //	this.Calculscore()
    /*this.getplayrposition('bagded',1,'Striker')
  	this.sparql.getSpark().subscribe(res=>{
console.log('res'+res.results.bindings[3].subject.value)
var splitted = res.results.bindings[3].subject.value.split("#", 2);
console.log('res1'+splitted[1])
/*this.sparql.getGoalkeeper().subscribe(res=>{
	this.Goalkeeper=res
})
})*/

    this.sparql.getallplayer().subscribe((res) => {
      for (let i = 0; i < 10000; i++) {
        let splitted = res.results.bindings[i].c.value.split('#', 2);
        this.allpayer.push({name: splitted[1], bool: false});
      }
    });
  }

  addplayer1() {
    this.addplayer = !this.addplayer;
  }

  addplayerM(c: Player) {
    console.log(this.i);
    this.allpayerMatch.push(c);
    c.bool = true;
    console.log('49' + this.allpayerMatch[this.i]);
    this.Calculscore(this.i);
    this.i++;
  }

  deleteplayerM(c: Player, a: number) {
    this.allpayerMatch.splice(a, 1);
    c.bool = false;
  }

  getplayrposition(player, formation: number, pos) {
    this.sparql.getPostionofPlayer(player).subscribe((res) => {
      // 		console.log('baghdad '+res.results.bindings[0].NamedIndividual.value)
      var splitted = res.results.bindings[0].NamedIndividual.value.split(
        '#',
        2
      );
      if (splitted[1] === pos) {
        console.log('200 ok pos=buf" :');
        this.scoreFormation[formation] = this.scoreFormation[formation] + 10;
      }
    });
  }

  Calculscore(n: number) {
    for (let player in this.allpayerMatch) {
      if (this.allpayerMatch[player] != '') {
        //formation 1
        if (n < 4) {
          this.getplayrposition(this.allpayerMatch[player], 1, 'Defender');
        } else if (n >= 4 && n < 8) {
          this.getplayrposition(this.allpayerMatch[player], 1, 'Midfielder');
        } else if (n >= 8) {
          this.getplayrposition(this.allpayerMatch[player], 1, 'Striker');
        }

        //formation2
        if (n < 5) {
          this.getplayrposition(this.allpayerMatch[player], 2, 'Defender');
        } else if (n >= 5 && n < 10) {
          this.getplayrposition(this.allpayerMatch[player], 2, 'Midfielder');
        } else if (n >= 10) {
          this.getplayrposition(this.allpayerMatch[player], 2, 'Striker');
        }
        //console.log('player'+this.allpayerMatch[player])

        //formation3
        if (n < 4) {
          this.getplayrposition(this.allpayerMatch[player], 3, 'Defender');
        } else if (n >= 4 && n < 10) {
          this.getplayrposition(this.allpayerMatch[player], 3, 'Midfielder');
        } else if (n >= 10) {
          this.getplayrposition(this.allpayerMatch[player], 3, 'Striker');
        }
        //console.log('player'+this.allpayerMatch[player])

        //formation4
        if (n < 5) {
          this.getplayrposition(this.allpayerMatch[player], 4, 'Defender');
        } else if (n >= 5 && n < 8) {
          this.getplayrposition(this.allpayerMatch[player], 4, 'Midfielder');
        } else if (n >= 8) {
          this.getplayrposition(this.allpayerMatch[player], 4, 'Striker');
        }

        //console.log('player'+this.allpayerMatch[player])
        //formation5
        if (n < 4) {
          this.getplayrposition(this.allpayerMatch[player], 5, 'Defender');
        } else if (n >= 4 && n < 10) {
          this.getplayrposition(this.allpayerMatch[player], 5, 'Midfielder');
        } else if (n >= 10) {
          this.getplayrposition(this.allpayerMatch[player], 5, 'Striker');
        }
        //console.log('player'+this.allpayerMatch[player])

        //formation6
        if (n < 6) {
          this.getplayrposition(this.allpayerMatch[player], 6, 'Defender');
        } else if (n >= 6 && n < 9) {
          this.getplayrposition(this.allpayerMatch[player], 6, 'Midfielder');
        } else if (n >= 9) {
          this.getplayrposition(this.allpayerMatch[player], 6, 'Striker');
        }
        //console.log('player'+this.allpayerMatch[player])
      }
    }

    console.log('score1 =>' + this.scoreFormation[1]);
    console.log('score2 =>' + this.scoreFormation[2]);
  }

  ngOnInit() {
  }

  doSearch() {
    this.allpayer.splice(0);
    if (this.search!= '') {
      this.sparql.search(this.search).subscribe((res) => {
        console.log(res);
        // this.allpayer.push({name: res.results, bool: false});
        for (let i = 0; i < 10000; i++) {
          let splitted = res.results.bindings[i].c.value.split('#', 2);
          this.allpayer.push({name: splitted[1], bool: false});
        }
      });
    } else {
      this.sparql.getallplayer().subscribe((res) => {
        for (let i = 0; i < 10000; i++) {
          let splitted = res.results.bindings[i].c.value.split('#', 2);
          this.allpayer.push({name: splitted[1], bool: false});
        }
      });
    }
  }
}
