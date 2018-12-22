const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const Tx = require('ethereumjs-tx')


//function defination starts here
var deployContract = async function(args)
{

var privateKey = new Buffer("B57880E41AB6D8C9979553D9A74E674638A00CA4D35946D6B87E5E663321CDD7", 'hex')
var myAddress = "0x191d7932C467de7EC09055A415260633e1Cc9F18";

// Connect to local Ethereum node
const web3js = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/1fd2fa9bd0e648158a0af7bd341595dd"));

// Compile the source code
//const input = fs.readFileSync('/home/gaurav/ethereum_projects/Integration_Artoreal/app/productContract.sol');
//const output = solc.compile(input.toString(), 1);
//console.log("output",output)

const bytecode ={
	"object": "608060405234801561001057600080fd5b506040516020806115e283398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061151e806100c46000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312e360351461007d5780633b6d5b8c146100d457806343d45bfb1461028c57806361fc7f6a146103fb578063828927c414610452578063fff3410714610676575b600080fd5b34801561008957600080fd5b5061009261079f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e057600080fd5b506100ff600480360381019080803590602001909291905050506107c5565b604051808060200180602001868152602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848103845289818151815260200191508051906020019080838360005b8381101561017f578082015181840152602081019050610164565b50505050905090810190601f1680156101ac5780820380516001836020036101000a031916815260200191505b50848103835288818151815260200191508051906020019080838360005b838110156101e55780820151818401526020810190506101ca565b50505050905090810190601f1680156102125780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b8381101561024b578082015181840152602081019050610230565b50505050905090810190601f1680156102785780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561029857600080fd5b506103f960048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b6f565b005b34801561040757600080fd5b50610410610d6e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561045e57600080fd5b5061047d60048036038101908080359060200190929190505050610d93565b60405180806020018060200187815260200180602001806020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200185810385528b818151815260200191508051906020019080838360005b838110156105015780820151818401526020810190506104e6565b50505050905090810190601f16801561052e5780820380516001836020036101000a031916815260200191505b5085810384528a818151815260200191508051906020019080838360005b8381101561056757808201518184015260208101905061054c565b50505050905090810190601f1680156105945780820380516001836020036101000a031916815260200191505b50858103835288818151815260200191508051906020019080838360005b838110156105cd5780820151818401526020810190506105b2565b50505050905090810190601f1680156105fa5780820380516001836020036101000a031916815260200191505b50858103825287818151815260200191508051906020019080838360005b83811015610633578082015181840152602081019050610618565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b34801561068257600080fd5b5061079d60048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111ea565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060806000606060006107d66113a8565b6002600088815260200190815260200160002060c06040519081016040529081600082018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561088e5780601f106108635761010080835404028352916020019161088e565b820191906000526020600020905b81548152906001019060200180831161087157829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109305780601f1061090557610100808354040283529160200191610930565b820191906000526020600020905b81548152906001019060200180831161091357829003601f168201915b5050505050815260200160028201548152602001600382018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff1615151515815250509050600115158160a001511515148015610a9f5750806080015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610b39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001807f4f6e6c7920446f63746f722063616e20736565206869732f68657220696e666f81526020017f726d6174696f6e0000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b80600001518160200151826040015183606001518460800151849450839350819150955095509550955095505091939590929450565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c82576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260478152602001807f4f6e6c7920486f73706974616c20726563657074696f6e6973742063616e206181526020017f6464207468652070617469656e742064657461696c7320696e746f207468652081526020017f7265636f7264210000000000000000000000000000000000000000000000000081525060600191505060405180910390fd5b60036000898152602001908152602001600020905086816000019080519060200190610caf9291906113f7565b5085816001019080519060200190610cc89291906113f7565b5084816002018190555083816003019080519060200190610cea9291906113f7565b5082816004019080519060200190610d039291906113f7565b50818160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160146101000a81548160ff0219169083151502179055505050505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60608060006060806000610da5611477565b6003600089815260200190815260200160002060e06040519081016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e5d5780601f10610e3257610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610e4057829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eff5780601f10610ed457610100808354040283529160200191610eff565b820191906000526020600020905b815481529060010190602001808311610ee257829003601f168201915b5050505050815260200160028201548152602001600382018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fab5780601f10610f8057610100808354040283529160200191610fab565b820191906000526020600020905b815481529060010190602001808311610f8e57829003601f168201915b50505050508152602001600482018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561104d5780601f106110225761010080835404028352916020019161104d565b820191906000526020600020905b81548152906001019060200180831161103057829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820160149054906101000a900460ff1615151515815250509050600115158160c00151151514801561111057508060a0015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156111aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001807f4f6e6c792050617469656e742063616e20736565206869732f68657220696e6681526020017f6f726d6174696f6e00000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b806000015181602001518260400151836060015184608001518560a001518595508494508292508191509650965096509650965096505091939550919395565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f8152602001807f4f6e6c7920486f73706974616c206f776e65722063616e20616464207468652081526020017f446f63746f722064657461696c7320696e746f20746865207265636f7264210081525060400191505060405180910390fd5b600260008881526020019081526020016000209050858160000190805190602001906113039291906113f7565b508481600101908051906020019061131c9291906113f7565b508381600201819055508281600301908051906020019061133e9291906113f7565b50818160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160040160146101000a81548160ff02191690831515021790555050505050505050565b60c06040519081016040528060608152602001606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061143857805160ff1916838001178555611466565b82800160010185558215611466579182015b8281111561146557825182559160200191906001019061144a565b5b50905061147391906114cd565b5090565b60e0604051908101604052806060815260200160608152602001600081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b6114ef91905b808211156114eb5760008160009055506001016114d3565b5090565b905600a165627a7a72305820936c9cc2368fd0ce1992de505d796c36e6c0757f1d91603636c981aa0d8dd7070029"}
// output.contracts["productContract"].bytecode;

const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "receptionList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_doctorId",
				"type": "uint256"
			}
		],
		"name": "getDoctorDetails",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_pId",
				"type": "uint256"
			},
			{
				"name": "_pName",
				"type": "string"
			},
			{
				"name": "_pEmail",
				"type": "string"
			},
			{
				"name": "_pContNum",
				"type": "uint256"
			},
			{
				"name": "_paddress",
				"type": "string"
			},
			{
				"name": "_consultedDoctor",
				"type": "string"
			},
			{
				"name": "_patientAddress",
				"type": "address"
			}
		],
		"name": "setPatientDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "OwnerOfHospital",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "getPatientInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_doctorId",
				"type": "uint256"
			},
			{
				"name": "_doctorName",
				"type": "string"
			},
			{
				"name": "_doctorEmail",
				"type": "string"
			},
			{
				"name": "_doctorContNum",
				"type": "uint256"
			},
			{
				"name": "_doctorLocalAddress",
				"type": "string"
			},
			{
				"name": "_doctorAddress",
				"type": "address"
			}
		],
		"name": "setDoctorDetails",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_receptionList",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];


/*JSON.parse(output.contracts['productContract'].interface);*/

// Contract object
const contract = new web3js.eth.Contract(abi);

// Get contract data
//const contractData = '0x' + bytecode.object;


const hexdata = contract.deploy({
    data: bytecode.object,
    arguments: [args[0],args[1],args[2],args[3],args[4],args[5]],
}).encodeABI(); 

return web3js.eth.getTransactionCount(myAddress).then(function(v){
    console.log("Count: "+v);
    count = v;
    var amount = web3js.utils.toHex(1e16);
    //creating raw tranaction
    try {
        var rawTransaction = {"from":myAddress, "gasPrice":web3js.utils.toHex(20* 1e9),"gasLimit":web3js.utils.toHex(990000),"value":"0x0","data":'0x'+hexdata,
        "nonce":web3js.utils.toHex(count)}
        console.log(rawTransaction);
    
    } catch (error) {
        console.log(error)
    }

    //creating tranaction via ethereumjs-tx
    var transaction = new Tx(rawTransaction);
    //signing transaction with private key
    transaction.sign(privateKey);
    //sending transacton via web3js module
    try {
        return web3js.eth.sendSignedTransaction('0x'+transaction.serialize().toString('hex')).then(function(result,err){
			return result;
		})
        
    } catch (error) {
        console.log(error)

    }   
})
}
exports.deployContract=deployContract;   

