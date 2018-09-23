		var vector=[2,2,2,2,2,2,2,2,2]; 
		function make() {
			if(vector[4]==2)
				return 4;
			else if(vector[1]==2)
				return 1;
			else if(vector[3]==2)
				return 3;
			else if(vector[5]==2)
				return 5;
			else if(vector[7]==2)
				return 7;
		}
		function posswin(a) {
			if(a==0) {
				if(vector[0]*vector[1]*vector[2]==18) {
					if(vector[0]==2) return 0; if(vector[1]==2) return 1; if(vector[2]==2) return 2;
				}
				if(vector[3]*vector[4]*vector[5]==18) {
					if(vector[3]==2) return 3; if(vector[4]==2) return 4; if(vector[5]==2) return 5;
				}
				if(vector[6]*vector[7]*vector[8]==18) {
					if(vector[6]==2) return 6; if(vector[7]==2) return 7; if(vector[8]==2) return 8;
				}
				if(vector[0]*vector[3]*vector[6]==18) {
					if(vector[0]==2) return 0; if(vector[3]==2) return 3; if(vector[6]==2) return 6;
				}
				if(vector[1]*vector[4]*vector[7]==18) {
					if(vector[1]==2) return 1; if(vector[4]==2) return 4; if(vector[7]==2) return 7;
				}
				if(vector[2]*vector[5]*vector[8]==18) {
					if(vector[2]==2) return 2; if(vector[5]==2) return 5; if(vector[8]==2) return 8;
				}
				if(vector[0]*vector[4]*vector[8]==18) {
					if(vector[0]==2) return 0; if(vector[4]==2) return 4; if(vector[8]==2) return 8;
				}
				if(vector[2]*vector[4]*vector[6]==18) {
					if(vector[2]==2) return 2; if(vector[4]==2) return 4; if(vector[6]==2) return 6;
				}
				return -1;
			}
			else {
				if(vector[0]*vector[1]*vector[2]==50) {
					if(vector[0]==2) return 0; if(vector[1]==2) return 1; if(vector[2]==2) return 2;
				}
				if(vector[3]*vector[4]*vector[5]==50) {
					if(vector[3]==2) return 3; if(vector[4]==2) return 4; if(vector[5]==2) return 5;
				}
				if(vector[6]*vector[7]*vector[8]==50) {
					if(vector[6]==2) return 6; if(vector[7]==2) return 7; if(vector[8]==2) return 8;
				}
				if(vector[0]*vector[3]*vector[6]==50) {
					if(vector[0]==2) return 0; if(vector[3]==2) return 3; if(vector[6]==2) return 6;
				}
				if(vector[1]*vector[4]*vector[7]==50) {
					if(vector[1]==2) return 1; if(vector[4]==2) return 4; if(vector[7]==2) return 7;
				}
				if(vector[2]*vector[5]*vector[8]==50) {
					if(vector[2]==2) return 2; if(vector[5]==2) return 5; if(vector[8]==2) return 8;
				}
				if(vector[0]*vector[4]*vector[8]==50) {
					if(vector[0]==2) return 0; if(vector[4]==2) return 4; if(vector[8]==2) return 8;
				}
				if(vector[2]*vector[4]*vector[6]==50) {
					if(vector[2]==2) return 2; if(vector[4]==2) return 4; if(vector[6]==2) return 6;
				}
				return -1;
			}
		}
		function win(a) {
			if(a==0) {
				if((vector[0]*vector[1]*vector[2]==27) || (vector[3]*vector[4]*vector[5]==27)
				||(vector[6]*vector[7]*vector[8]==27) ||(vector[0]*vector[3]*vector[6]==27)
				||(vector[1]*vector[4]*vector[7]==27) ||(vector[2]*vector[5]*vector[8]==27)
				||(vector[0]*vector[4]*vector[8]==27) ||(vector[2]*vector[4]*vector[6]==27))
					return 1;
				else
					return 0;
			}
			else {
				if((vector[0]*vector[1]*vector[2]==125) || (vector[3]*vector[4]*vector[5]==125)
				||(vector[6]*vector[7]*vector[8]==125) ||(vector[0]*vector[3]*vector[6]==125)
				||(vector[1]*vector[4]*vector[7]==125) ||(vector[2]*vector[5]*vector[8]==125)
				||(vector[0]*vector[4]*vector[8]==125) ||(vector[2]*vector[4]*vector[6]==125))
					return 1;
				else
					return 0;
			}
		}
		function go(a,b) {
			if(a==0) {
				if(b==3) 
					$('#one').html('X');
				else
					$('#one').html('O');
			}
			else if(a==1) {
				if(b==3) 
					$('#two').html('X');
				else
					$('#two').html('O');
			}
			else if(a==2) {
				if(b==3) 
					$('#three').html('X');
				else
					$('#three').html('O');
			}
			else if(a==3) {
				if(b==3) 
					$('#four').html('X');
				else
					$('#four').html('O');
			}
			else if(a==4) {
				if(b==3) 
					$('#five').html('X');
				else
					$('#five').html('O');
			}
			else if(a==5) {
				if(b==3) 
					$('#six').html('X');
				else
					$('#six').html('O');
			}
			else if(a==6) {
				if(b==3) 
					$('#seven').html('X');
				else
					$('#seven').html('O');
			}
			else if(a==7) {
				if(b==3) 
					$('#eight').html('X');
				else
					$('#eight').html('O');
			}
			else {
				if(b==3) 
					$('#nine').html('X');
				else
					$('#nine').html('O');
			}
		}
		var turn=1;
		var a=-1;
		$('#first').click(function() {
			a=0;
			$('#first').css("display","none");
			$('#second').css("display","none");
		})
		$('#second').click(function() {
			a=1;
			$('#first').css("display","none");
			$('#second').css("display","none");
			vector[0]=3;
			go(0,3);
			turn++;
		})
		$('.dim').click(function() {
			if(a==0) {
				var i=$(this).val();
				if(vector[i]!=2) return;
				vector[i]=3;
				go(i,3)
				if(win(a)) {
					a=-1;
					$('#win').html("You have Won!");
					$('#win').css("display","block");
					$('#game').css("display","block");
					return;
				}
				if(turn==9) {
					$('#drawn').html("It's a Draw");
					$('#drawn').css("display","block");
					$('#game').css("display","block");
				}
				turn++;
				if(turn==2) {
					if(vector[4]==2) {
						vector[4]=5;
						go(4,5);
					}
					else {
						vector[0]=5;
						go(0,5);
					}
				}
				else if(turn==4) {
					var b=posswin(a);
					if(b>-1) {
						vector[b]=5;
						go(b,5);
					}
					else {
						var c=make();
						vector[c]=5;
						go(c,5);
					}
				}
				else if(turn==6) {
					var b=posswin(a);
					var c=posswin(a+1);
					if(c>-1) {
						vector[c]=5;
						a=-1;
						$('#lose').html("Computer Wins");
						$('#lose').css("display","block");
						$('#game').css("display","block");
						go(c,5);
					}
					else if(b>-1) {
						vector[b]=5;
						go(b,5);
					}
					else {
						var d=make();
						vector[d]=5;
						go(d,5);
					}
				}
				else if(turn==8) {
					var b=posswin(a);
					var c=posswin(a+1);
					if(c>-1) {
						vector[c]=5;
						a=-1;
						$('#lose').html("Computer Wins");
						$('#lose').css("display","block");
						$('#game').css("display","block");
						go(c,5);
					}
					else if(b>-1) {
						vector[b]=5;
						go(b,5);
					}
					else {
						for(var i=0;i<=8;i++) {
							if(vector[i]==2) {
								vector[i]==5;
								go(i,5);
								break;
							}	
						}		
					}
				}
				turn++;
			}
			if(a==1) {
				var i=$(this).val();
				if(vector[i]!=2) return;
				vector[i]=5;
				go(i,5);
				if(win(a)) {
					a=-1;
					$('#win').html("You have Won!");
					$('#win').css("display","block");
					$('#game').css("display","block");
					return;
				}
				turn++;
				if(turn==3) {
					if(vector[8]==2) {
						vector[8]=3;
						go(8,3);
					}
					else {
						vector[2]=3;
						go(2,3);
					}
				}
				else if(turn==5) {
					var b=posswin(a);
					var c=posswin(a-1);
					if(c>-1) {
						vector[c]=3;
						go(c,3);
						a=-1;
						$('#lose').html("Computer Wins");
						$('#lose').css("display","block");
						$('#game').css("display","block");
					}
					else if(b>-1) {
						vector[b]=3;
						go(b,3);
					}
					else {
						if(vector[6]==2) {
						vector[6]=3;
						go(6,3);
						}
						else {
							vector[2]=3;
							go(2,3);
						}
					}	
				}
				else if(turn==7 || turn==9) {
					var b=posswin(a);
					var c=posswin(a-1);
					 if(c>-1) {
						vector[c]=3;
						go(c,3);
						a=-1;
						$('#lose').html("Computer Wins");
						$('#lose').css("display","block");
						$('#game').css("display","block");
					}
					else if(b>-1) {
						vector[b]=3;
						go(b,3);
						if(turn==9) {
							$('#drawn').html("It's a Draw");
							$('#drawn').css("display","block");
							$('#game').css("display","block");
						}
					}
					else {
						for(var i=0;i<=8;i++) {
							if(vector[i]==2) {
								vector[i]==3;
								go(i,3);
								if(turn==9) {
									$('#drawn').html("It's a Draw");
									$('#drawn').css("display","block");
									$('#game').css("display","block");
								}
								break;
							}
						}
					}
				}
				turn++;
			}		
		})
		$('#game').click(function() {
			document.location.reload();
		})