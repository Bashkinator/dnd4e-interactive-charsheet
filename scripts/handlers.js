var Handlers = {

	portraitButton: {

		onClick: function(event) {
			if(!event) return;
			event.target.buttonImportIcon();
		}
		
	},

	addXpButton: {
		onClick: function(event) {
			if(!event) return;
			var newXp = app.response({
				cQuestion: l10n.translate("ADD_XP_REPONSE_TEXT"),
				cTitle: l10n.translate("ADD_XP_RESPONSE_TITLE"),
				cDefault: 0,
				cLabel: "+"
			});
			newXp = parseInt(newXp);
			if(!Number.isNaN(newXp) && newXp > 0){
				PlayerCharacter.xp += newXp;
				PlayerCharacter.updateView(event.target.doc);			
			}
		}
	},

	money: {
		validate: function(event){
			var newMoney = parseInt(event.value);
			if(Number.isNaN(newMoney) || (newMoney<0)){
				event.rc = false;
			}
		},
		onChange: function(event, money) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newMoney = parseInt(event.value);
			if(newMoney != PlayerCharacter.money[money]){
				PlayerCharacter.money[money] = newMoney;
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},


	moneyButton: {
		onClick: function(event, money, add){
			var textStr = ((add)?"ADD":"SPEND") + "_" + l10n.getMoneyConstant(money) + "_REPONSE_TEXT";
			var titleStr = ((add)?"ADD":"SPEND") + "_" + l10n.getMoneyConstant(money) + "_REPONSE_TITLE";
			var dMoney = app.response({
				cQuestion: l10n.translate(textStr),
				cTitle: l10n.translate(titleStr),
				cDefault: 0,
				cLabel: (add)?"+":"-"
			});
			dMoney = parseInt(dMoney);
			if(!Number.isNaN(dMoney) && dMoney > 0){
				dMoney = (add) ? dMoney : -dMoney
				if( add || (PlayerCharacter.money[money]+dMoney)>=0 ) {
					PlayerCharacter.money[money] += dMoney;
					PlayerCharacter.updateView(event.target.doc);								
				}
			}			
		}
	},

	xp: {
		validate: function(event){
			var newXp = parseInt(event.value);
			if(Number.isNaN(newXp) || (newXp<0)){
				event.rc = false;
			}
		},
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newXp = parseInt(event.value);
			if(newXp != PlayerCharacter.xp){
				PlayerCharacter.xp = newXp;
				PlayerCharacter.updateView(event.target.doc);				
			}			
		}
	},	

	level: {
		validate: function(event){
			var newLevel = parseInt(event.value);
			if(Number.isNaN(newLevel) || (newLevel<1)){
				event.rc = false;
			}			
		},		
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newLevel = parseInt(event.value);
			var oldLevel = PlayerCharacter.getLevel();						
			if(newLevel != oldLevel){
				if(newLevel>30){
					PlayerCharacter.extraLevels = newLevel - 30;
					if(oldLevel<30){
						PlayerCharacter.xp = Level.toXp(newLevel);
					}					
				}else{
					PlayerCharacter.extraLevels = 0
					PlayerCharacter.xp = Level.toXp(newLevel);
				}
				PlayerCharacter.updateView(event.target.doc);	
			}
			
		}
	},

	abilityScore: {
		validate: function(event){
			var newScore = parseInt(event.value);
			if(Number.isNaN(newScore) || (newScore<0)){
				event.rc = false;
			}
		},
		onChange: function(event, ability) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newScore = parseInt(event.value);
			if(newScore != PlayerCharacter.abilities[ability]){
				PlayerCharacter.abilities[ability] = newScore;				
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},						

	initiativeMiscMod: {
		validate: function(event){
			if(!event) return;
			var newMod = parseInt(event.value);
			if(Number.isNaN(newMod)){
				event.rc = false;
			}
		},
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newMod = parseInt(event.value);
			if(newMod != PlayerCharacter.initiativeMiscBonus){
				PlayerCharacter.initiativeMiscBonus = newMod;
				event.value = signedNumberToString(PlayerCharacter.initiativeMiscBonus);
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},

	deityDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newDeityIndex = event.target.currentValueIndices;
			var newDeity = (newDeityIndex>=0) ? event.target.getItemAt(newDeityIndex) : event.value;			
			if(!newDeity){
				newDeity = event.value = "-";
			}
			if(newDeity != PlayerCharacter.deity){
				PlayerCharacter.deity = newDeity;							
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},

	classDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newClassIndex = event.target.currentValueIndices;
			var newClass = (newClassIndex>=0) ? event.target.getItemAt(newClassIndex) : event.value;								
			if(!newClass){
				newClass = "-";
				event.value = "-";
			}
			if(newClass != PlayerCharacter.class){
				PlayerCharacter.class = newClass;			
				if(newClassIndex>=0){					
					PlayerCharacter.setClassData(PlayerClass[newClass]);					
				}				
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},

	raceDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newRaceIndex = event.target.currentValueIndices;
			var newRace = (newRaceIndex>=0) ? event.target.getItemAt(newRaceIndex) : event.value;								
			if(!newRace){
				newRace = "-";
				event.value = "-";
			}
			if(newRace != PlayerCharacter.race){
				PlayerCharacter.race = newRace;			
				if(newRaceIndex>=0){					
					PlayerCharacter.setRaceData(PlayerRace[newRace]);					
				}				
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},	

	sizeDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newSizeIndex = event.target.currentValueIndices;
			var newSize = (newSizeIndex>=0) ? event.target.getItemAt(newSizeIndex) : event.value;			
			if(!newSize){
				newSize = event.value = "-";
			}
			if(newSize != PlayerCharacter.size){
				PlayerCharacter.size = newSize;							
				PlayerCharacter.updateView(event.target.doc);
			}			
		}
	},	

	paragonPathDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newParagonPathIndex = event.target.currentValueIndices;
			var newParagonPath = (newParagonPathIndex>=0) ? event.target.getItemAt(newParagonPathIndex) : event.value;								
			if(!newParagonPath){
				newParagonPath = "-";
				event.value = "-";				
			}
			if(newParagonPath != PlayerCharacter.paragonPath){
				PlayerCharacter.paragonPath = newParagonPath;			
				// if(newParagonPathIndex>=0){					
				// 	PlayerCharacter.setParagonPathData(PlayerParagonPath[newParagonPath]);					
				// }				
				// PlayerCharacter.updateView(event.target.doc);
			}		
		}
	},

	epicDestinyDropdown: {
		onChange: function(event) {
			if(!event || (event.source != event.target)){
				event.rc = false;
				return;
			}
			var newEpicDestinyIndex = event.target.currentValueIndices;
			var newEpicDestiny = (newEpicDestinyIndex>=0) ? event.target.getItemAt(newEpicDestinyIndex) : event.value;								
			if(!newEpicDestiny){
				newEpicDestiny = "-";
				event.value = "-";				
			}
			if(newEpicDestiny != PlayerCharacter.epicDestiny){
				PlayerCharacter.epicDestiny = newEpicDestiny;			
				// if(newEpicDestinyIndex>=0){					
				// 	PlayerCharacter.setEpicDestinyData(PlayerEpicDestiny[newEpicDestiny]);					
				// }				
				// PlayerCharacter.updateView(event.target.doc);
			}		
		}
	}	

};
