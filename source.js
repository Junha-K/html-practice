function FrameHandler(self){
	if(self.className === 'frame'){
		self.className = 'expanded';
	}else {
		self.className = 'frame';
	}
}

const Collection1REF = ['https://hunkim.github.io/ml/','https://url.kr/px3s2o'];
const Collection1Text = ['모두를 위한 머신러닝/딥러닝 강의','노벨연구소 선정 역대 최고의 책'];

function AddorHideLink(self){
	if(self.className === 'expanded'){
		for(i=0; i<Collection1REF.length; i++){
			let a = document.createElement('a');
			let linktext = document.createTextNode(Collection1Text[i]);
			a.title = "moving to"+Collection1Text[i];
			a.href = Collection1REF[i];
			a.appendChild(linktext);
			let alist = document.createElement('li');
			alist.appendChild(a);
			var element = document.getElementById('List1');
			element.appendChild(alist);
		}
	}else{
		for(i=0;i<Collection1REF.length;i++){
			let links = document.getElementById('List1');
			links.removeChild(links.lastChild)
		}

	}
}
