// Import the page's CSS. Webpack will know what to do with it.
import '../stylesheets/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'

// abi of ICO.sol
var abi = [
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_spender',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_from',
        'type': 'address'
      },
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'executed',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': '_totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'RATE',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_to',
        'type': 'address'
      },
      {
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'createTokens',
    'outputs': [],
    'payable': true,
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '_owner',
        'type': 'address'
      },
      {
        'name': '_spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': '_symbol',
        'type': 'string'
      },
      {
        'name': '_name',
        'type': 'string'
      },
      {
        'name': '_decimals',
        'type': 'uint8'
      },
      {
        'name': '_RATE',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'type': 'constructor'
  },
  {
    'payable': true,
    'type': 'fallback'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': '_value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  }
]

// bytecode of ICO.sol
var bytecode = '0x6060604052600080556001805460ff19169055341561001d57600080fd5b604051610b32380380610b3283398101604052808051820191906020018051820191906020018051919060200180519150505b6001805461010060a860020a03191661010033600160a060020a03160217905560028480516100839291602001906100b6565b5060038380516100979291602001906100b6565b506004805460ff191660ff841617905560058190555b50505050610156565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100f757805160ff1916838001178555610124565b82800160010185558215610124579182015b82811115610124578251825591602001919060010190610109565b5b50610131929150610135565b5090565b61015391905b80821115610131576000815560010161013b565b5090565b90565b6109cd806101656000396000f300606060405236156100b45763ffffffff60e060020a60003504166306fdde0381146100c5578063095ea7b31461015057806318160ddd1461018657806323b872dd146101ab578063313ce567146101e757806331a38c89146102105780633eaaf86b14610237578063664e97041461025c57806370a08231146102815780638da5cb5b146102b257806395d89b41146102e1578063a9059cbb1461036c578063b4427263146103a2578063dd62ed3e146103ac575b6100c35b6100c06103e3565b5b565b005b34156100d057600080fd5b6100d86104a6565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101155780820151818401525b6020016100fc565b50505050905090810190601f1680156101425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015b57600080fd5b610172600160a060020a0360043516602435610544565b604051901515815260200160405180910390f35b341561019157600080fd5b6101996105b1565b60405190815260200160405180910390f35b34156101b657600080fd5b610172600160a060020a03600435811690602435166044356105b8565b604051901515815260200160405180910390f35b34156101f257600080fd5b6101fa610723565b60405160ff909116815260200160405180910390f35b341561021b57600080fd5b61017261072c565b604051901515815260200160405180910390f35b341561024257600080fd5b610199610735565b60405190815260200160405180910390f35b341561026757600080fd5b61019961073b565b60405190815260200160405180910390f35b341561028c57600080fd5b610199600160a060020a0360043516610741565b60405190815260200160405180910390f35b34156102bd57600080fd5b6102c5610760565b604051600160a060020a03909116815260200160405180910390f35b34156102ec57600080fd5b6100d8610774565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101155780820151818401525b6020016100fc565b50505050905090810190601f1680156101425780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561037757600080fd5b610172600160a060020a0360043516602435610812565b604051901515815260200160405180910390f35b6100c36103e3565b005b34156103b757600080fd5b610199600160a060020a03600435811690602435166108f4565b60405190815260200160405180910390f35b6000348190116103f257600080fd5b60055461040690349063ffffffff61092116565b60005490915061041c908263ffffffff61095016565b6000908155600160a060020a033316815260066020526040902054610447908263ffffffff61095016565b600160a060020a033381166000908152600660205260409081902092909255600154610100900416903480156108fc029151600060405180830381858888f19350505050151561049657600080fd5b6001805460ff1916811790555b50565b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b505050505081565b600160a060020a03338116600081815260076020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6000545b90565b600160a060020a0380841660009081526007602090815260408083203390941683529290529081205482901080159061060a5750600160a060020a038416600090815260066020526040902054829010155b80156106165750600082115b151561062157600080fd5b600160a060020a03841660009081526006602052604090205461064a908363ffffffff61096a16565b600160a060020a03808616600090815260066020526040808220939093559085168152205461067f908363ffffffff61095016565b600160a060020a038085166000908152600660209081526040808320949094558783168252600781528382203390931682529190915220546106c7908363ffffffff61096a16565b600160a060020a03808616600081815260076020908152604080832033861684529091529081902093909355908516916000805160206109828339815191529085905190815260200160405180910390a35060015b9392505050565b60045460ff1681565b60015460ff1681565b60005481565b60055481565b600160a060020a0381166000908152600660205260409020545b919050565b6001546101009004600160a060020a031681565b60028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561053c5780601f106105115761010080835404028352916020019161053c565b820191906000526020600020905b81548152906001019060200180831161051f57829003601f168201915b505050505081565b600160a060020a03331660009081526006602052604081205482901080159061083b5750600082115b151561084657600080fd5b600160a060020a03331660009081526006602052604090205461086f908363ffffffff61096a16565b600160a060020a0333811660009081526006602052604080822093909355908516815220546108a4908363ffffffff61095016565b600160a060020a0380851660008181526006602052604090819020939093559133909116906000805160206109828339815191529085905190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600760209081526040808320938516835292905220545b92915050565b600082820283158061093d575082848281151561093a57fe5b04145b151561094557fe5b8091505b5092915050565b60008282018381101561094557fe5b8091505b5092915050565b60008282111561097657fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820b4730732aed105a3f95eb4a5a9f8d4b96fc8027009e293822be6cfbd583f522e0029'

// will be the address and instance of a deployed contract, if a user wants to call some functions
var address
var deployedContract
var go

// just used to know what URL to use when linking to etherscan.io
var isMainNetwork

window.App = {

  deploy: function () {
    var symbol = $('#symbol').val()
    var name = $('#name').val()
    var decimals = $('#decimals').val()
    var rate = $('#rate').val()

    if (symbol === '') {
      alert('symbol can\'t be blank')
    } else if (name === '') {
      alert('name can\'t be blank')
    } else if (decimals === '') {
      alert('decimals can\'t be blank')
    } else if (rate === '') {
      alert('rate can\'t be blank')
    } else {
      statusText.innerHTML = 'Waiting for contract to be deployed...'

      var contract = web3.eth.contract(abi)

      let deployedContract = contract.new(symbol, name, decimals, rate, { from:web3.eth.accounts[0], data:bytecode, gas: 1300000 }, function (error, result) {
        if (!error) {
          if (!deployedContract.address) {
            if (isMainNetwork) {
              statusText.innerHTML = 'Contract deployment in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12). Transaction hash: <a href="https://etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
            } else {
              statusText.innerHTML = 'Contract deployment in progress - please be patient. If nothing happens for a while check if there\'s any errors in the console (hit F12). Transaction hash: <a href="https://ropsten.etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
            }
          } else {
            statusText.innerHTML = 'Contract deployed at address <b>' + deployedContract.address + '</b> - keep a record of this.'
          }
        } else { console.error(error) }
      })
    }
  },

  callContract: function () {
   // to clean this up later, can first check that user input starts with 0x and is the right length etc - also say any error on the page rather than asking user to look at the console

    address = $('#contractAddress').val()

    contractStatus.innerHTML = 'Trying to look up an Eternal contract at <b>' + address + '</b>. If nothing happens for a while, check the console (hit F12) to see if there\'s some error.'

    deployedContract = web3.eth.contract(abi).at(address)

    // if the contract is found return some information about it

    var owner
    var symbol
    var name

    deployedContract.owner.call(function (err, res) {
      owner = res
    })

    deployedContract.symbol.call(function (err, res) {
      symbol = res
    })

    deployedContract.name.call(function (err, res) {
      name = res
    })

    deployedContract.totalSupply.call(function (error, result) {
      if (!error) {
        if (symbol === null) {
          contractStatus.innerHTML = 'Contract not found.'
        } else {
          contractStatus.innerHTML = 'Success! Deployed ICO contract found at address <b>' + address + '</b>. This contract was deployed by user <b>' + owner + '</b>, who has sold <b>' + result + '</b> tokens. This is' +
            ' the <b>' + name + '</b> token (symbol <b>' + symbol + '</b>).'

          // contract found successfully, so can allow the user to execute functions on it

          $('#balanceOf_owner').prop('disabled', false)
          $('#balanceOf').attr('disabled', false)
          $('#transfer_to').prop('disabled', false)
          $('#transfer_value').prop('disabled', false)
          $('#transfer').attr('disabled', false)
          $('#transferFrom_from').prop('disabled', false)
          $('#transferFrom_to').prop('disabled', false)
          $('#transferFrom_value').prop('disabled', false)
          $('#transferFrom').attr('disabled', false)
          $('#approve_spender').prop('disabled', false)
          $('#approve_value').prop('disabled', false)
          $('#approve').attr('disabled', false)
          $('#allowance_owner').prop('disabled', false)
          $('#allowance_spender').prop('disabled', false)
          $('#allowance').attr('disabled', false)
        }
      } else {
        console.error(error)
      }
    })
  },

  balanceOf: function () {
    let balanceOf_owner = $('#balanceOf_owner').val()

    balanceOfStatus.innerHTML = 'Trying to query the balance of user <b>' + balanceOf_owner + '</b>. If nothing happens for a while, check the console (hit F12) to see if there\'s some error.'

    deployedContract.balanceOf.call(balanceOf_owner, function (error, result) {
      if (!error) {
          balanceOfStatus.innerHTML = 'Balance of <b>' + result + '</b> for <b>' + balanceOf_owner + '</b>'
      } else {
        console.error(error)
      }
    })
  },

  transfer: function () {
    let transfer_to = $('#transfer_to').val()
    let transfer_value = $('#transfer_value').val()

    transferStatus.innerHTML = 'Trying to transfer <b>' + transfer_value + '</b> tokens from your account to <b>' + transfer_to + '</b>. If nothing happens for a few seconds, check the console (hit F12) to see if there\'s some error.'

    deployedContract.transfer(transfer_to, transfer_value, { from:web3.eth.accounts[0], gas: 200000 }, function (error, result) {
      if (!error) {
        if (isMainNetwork) {
          transferStatus.innerHTML = 'The transfer of <b>' + transfer_value + '</b> tokens from your account to <b>' + transfer_to + '</b> has been submitted. Transaction hash: <a href="https://etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        } else {
          transferStatus.innerHTML = 'The transfer of <b>' + transfer_value + '</b> tokens from your account to <b>' + transfer_to + '</b> has been submitted. Transaction hash: <a href="https://ropsten.etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        }
      } else {
        console.error(error)
      }
    })
  },

  transferFrom: function () {
    let transferFrom_from = $('#transferFrom_from').val()
    let transferFrom_to = $('#transferFrom_to').val()
    let transferFrom_value = $('#transferFrom_value').val()

    transferFromStatus.innerHTML = 'Trying to transfer <b>' + transferFrom_value + '</b> tokens from <b>' + transferFrom_from + '</b> to <b>' + transferFrom_to + '</b>. If nothing happens for a while, check the console (hit F12) to see if there\'s some error.'

    deployedContract.transferFrom(transferFrom_from, transferFrom_to, transferFrom_value, { from:web3.eth.accounts[0], gas: 200000 }, function (error, result) {
      if (!error) {
        if (isMainNetwork) {
          transferFromStatus.innerHTML = 'Transfer of <b>' + transferFrom_value + '</b> tokens from <b>' + transferFrom_from + '</b> to <b>' + transferFrom_to + '</b> successful. Transaction hash: <a href="https://etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        } else {
          transferFromStatus.innerHTML = 'Transfer of <b>' + transferFrom_value + '</b> tokens from <b>' + transferFrom_from + '</b> to <b>' + transferFrom_to + '</b> successful. Transaction hash: <a href="https://ropsten.etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        }
      } else {
        console.error(error)
      }
    })
  },

  approve: function () {
    let approve_spender = $('#approve_spender').val()
    let approve_value = $('#approve_value').val()

    approveStatus.innerHTML = 'Trying to approve <b>' + approve_spender + '</b> to transfer <b>' + approve_value + '</b> tokens from your account. If nothing happens for a while, check the console (hit F12) to see if there\'s some error.'

    deployedContract.approve(approve_spender, approve_value, { from:web3.eth.accounts[0], gas: 200000 }, function (error, result) {
      if (!error) {
        if (isMainNetwork) {
          approveStatus.innerHTML = '<b>' + approve_spender + '</b> has been approved to spend <b>' + approve_value + '</b> tokens from your account. Transaction hash: <a href="https://etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        } else {
          approveStatus.innerHTML = '<b>' + approve_spender + '</b> has been approved to spend <b>' + approve_value + '</b> tokens from your account. Transaction hash: <a href="https://ropsten.etherscan.io/tx/' + result + '" target="_blank">' + result + '</a>'
        }
      } else {
        console.error(error)
      }
    })
  },

  allowance: function () {
    let allowance_owner = $('#allowance_owner').val()
    let allowance_spender = $('#allowance_spender').val()

    allowanceStatus.innerHTML = 'Checking how many tokens <b>' + allowance_spender + '</b> can spend from the account of<b>' + allowance_owner + '</b>. If nothing happens for a while, check the console (hit F12) to see if there\'s some error.'

    deployedContract.allowance.call(allowance_owner, allowance_spender, function (error, result) {
      if (!error) {
        if (isMainNetwork) {
          allowanceStatus.innerHTML = '<b>' + allowance_spender + '</b> can spend <b>' + result + '</b> tokens from the account of <b>' + allowance_owner + '</b>.'
        } else {
          allowanceStatus.innerHTML = '<b>' + allowance_spender + '</b> can spend <b>' + result + '</b> tokens from the account of <b>' + allowance_owner + '</b>.'
        }
        allowanceStatus.innerHTML = '<b>' + allowance_spender + '</b> can spend <b>' + result + '</b> tokens from the account of <b>' + allowance_owner + '</b>'
      } else {
        console.error(error)
      }
    })
  }

}

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
        // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)

    instructions.innerHTML = '<p><b>Fill out the values below to deploy your very own ICO crowdsale contract</b>, which people can send ether to and receive your token in return. ' +
        'After deploying the contract you will receive the address of your newly created contract which can immediately start receiving ether. Your contract will send all the ' +
        'ether it receives to the account you are using now ' + '(' + web3.eth.accounts[0] + ').</p>' +
        '<p><i>Symbol</i> will be the ticker of your token, such as BTC or ETC (normally tokens have a 3 letter uppercase symbol). <i>Name</i> is simply what you want to call ' +
        'your token, such as Bitcoin or Ethereum. <i>Decimals</i> is how many decimals your token can have, which determines how divisible it is. Generally tokens will have 18 ' +
        'decimals, which allows 1 token to be divided into trillions of pieces (eg. with 18 decimals you could have as little as 0.000000000000000001 of a token). The <i>Rate</i> will be how many tokens a ' +
        'buyer will receive for every ether they send to the contract. Eg. Rate = 1000 would give someone sending 1 ether to your contract 1000 of your token.</p>'

    statusText.innerHTML = 'Status: nothing happening yet.'

    contractStatus.innerHTML = 'Status: no contract called yet.'

    web3.version.getNetwork((err, netId) => {
      switch (netId) {
        case '1':
          whichNetwork.innerHTML = 'You are connected to the mainnet.'
          isMainNetwork = true
          break
        case '2':
          whichNetwork.innerHTML = 'You are connected to morden.'
          break
        case '3':
          whichNetwork.innerHTML = 'You are connected to ropsten.'
          isMainNetwork = false
          break
        default:
          whichNetwork.innerHTML = 'We don\'t know what network you are connected to.'
      }
    })
  } else {
    instructions.innerHTML = '<p><b>How does this work if you\'re connected to the Ethereum network?</b> You simply fill out the form below, which will generate a crowdsale contract that people can send ether to and receive your token in return. ' +
        'After deploying the contract you will receive the address of your newly created contract which can immediately start receiving ether. All the ether your contract receives will be sent to the Ethereum address you used to create it.' +
        '<p><i>Symbol</i> will be the ticker of your token, such as BTC or ETC (normally tokens have a 3 letter uppercase symbol). <i>Name</i> is simply what you want to call ' +
        'your token, such as Bitcoin or Ethereum. <i>Decimals</i> is how many decimals your token can have, which determines how divisible it is. Generally tokens will have 18 ' +
        'decimals, which allows 1 token to be divided into trillions of pieces (eg. with 18 decimals you could have as little as 0.000000000000000001 of a token). The <i>Rate</i> will be how many tokens a ' +
        'buyer will receive for every ether they send to the contract. Eg. Rate = 1000 would give someone sending 1 ether to your contract 1000 of your token.</p>'

    statusText.innerHTML = 'Status: not connected to any network.'

    whichNetwork.innerHTML = 'You do not appear to be connected to any Ethereum network. To use this service and deploy your ICO contract, we recommend using the <a href="http://metamask.io">MetaMask</a> plugin for Google Chrome, which allows your web browser to connect to an Ethereum network.'

    $('#symbol').attr('disabled', true)
    $('#name').attr('disabled', true)
    $('#decimals').attr('disabled', true)
    $('#rate').attr('disabled', true)
    $('#button').attr('disabled', true)

    $('#contractAddress').attr('disabled', true)
    $('#contractAddressButton').attr('disabled', true)

    contractStatus.innerHTML = 'Status: no contract called - you need to connect to an Ethereum network first.'
  }

  balanceOfStatus.innerHTML = 'Status: function not called yet.'
  transferStatus.innerHTML = 'Status: function not called yet.'
  transferFromStatus.innerHTML = 'Status: function not called yet.'
  approveStatus.innerHTML = 'Status: function not called yet.'
  allowanceStatus.innerHTML = 'Status: function not called yet.'

  // forms and buttons to execute functions on a contract, disable these until the user enters a contract address
  $('#balanceOf_owner').prop('disabled', true)
  $('#balanceOf').attr('disabled', true)
  $('#transfer_to').prop('disabled', true)
  $('#transfer_value').prop('disabled', true)
  $('#transfer').attr('disabled', true)
  $('#transferFrom_from').prop('disabled', true)
  $('#transferFrom_to').prop('disabled', true)
  $('#transferFrom_value').prop('disabled', true)
  $('#transferFrom').attr('disabled', true)
  $('#approve_spender').prop('disabled', true)
  $('#approve_value').prop('disabled', true)
  $('#approve').attr('disabled', true)
  $('#allowance_owner').prop('disabled', true)
  $('#allowance_spender').prop('disabled', true)
  $('#allowance').attr('disabled', true)
})
