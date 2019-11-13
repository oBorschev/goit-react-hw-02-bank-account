(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{16:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(2),o=n.n(c),l=n(13),s=n(14),i=n(7),u=n(8),p=n(10),m=n(9),b=n(11),d=n(12),h=n.n(d),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={amount:0},n.handleInputAmount=function(e){n.setState({amount:Number(e.currentTarget.value)})},n.setDeposit=function(){n.props.deposit(n.state.amount)},n.setWithdraw=function(){n.props.withdraw(n.state.amount)},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"controls"},r.a.createElement("input",{type:"number",name:"amount",id:this.props.amountId,onChange:this.handleInputAmount}),r.a.createElement("button",{type:"button",onClick:this.setDeposit},"Deposit"),r.a.createElement("button",{type:"button",onClick:this.setWithdraw},"Withdraw"))}}]),t}(a.Component),y=function(e){var t=e.withdraw,n=e.deposit,a=e.balance;return r.a.createElement("section",{className:"balance"},r.a.createElement("span",null,"\u2b06\ufe0f",t,"$"),r.a.createElement("span",null,"\u2b07\ufe0f",n,"$"),r.a.createElement("span",null,"Balance: ",a,"$"))},O=function(e){var t=e.arrayOfTransactions;return r.a.createElement("table",{className:"history"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,t.map((function(e){var t=e.id,n=e.type,a=e.amount,c=e.date;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n),r.a.createElement("td",null,a,"$"),r.a.createElement("td",null,c))}))))},E=n(5);n(29);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[],balance:0},n.generateIds={amountInput:h.a.generate()},n.handleDeposit=function(e){if(e){var t={id:h.a.generate(),type:"income",amount:e,date:(new Date).toLocaleString()};n.setState((function(n){return{balance:n.balance+e,transactions:[].concat(Object(s.a)(n.transactions),[t])}}))}else E.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},n.handleWithdraw=function(e){if(e>n.state.balance)E.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else if(e<=0)E.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else{var t={id:h.a.generate(),type:"expenses",amount:e,date:(new Date).toLocaleString()};n.setState((function(n){return{balance:n.balance-e,transactions:[].concat(Object(s.a)(n.transactions),[t])}}))}},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,n=e.balance,a=this.generateIds.amountInput,c=t.reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t.type,t.amount+e[t.type]))}),{income:0,expenses:0});return r.a.createElement("div",{className:"dashboard"},r.a.createElement(f,{amountId:a,deposit:this.handleDeposit,withdraw:this.handleWithdraw}),r.a.createElement(y,{withdraw:c.expenses,deposit:c.income,balance:n}),r.a.createElement(O,{arrayOfTransactions:t}),r.a.createElement(E.a,null))}}]),t}(a.Component),g=function(){return r.a.createElement("div",null,r.a.createElement(j,null))};n(32);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a440d23.chunk.js.map