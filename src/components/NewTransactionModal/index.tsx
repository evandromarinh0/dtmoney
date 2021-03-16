import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';

import closeModal from '../../assets/x.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { 
  Container,
  TransactionTypeContainer,
  RadioBox
} from './styles';
import { TransactionsContext } from '../../hooks/TransactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
}

export function NewTransactionModal({ isOpen, onCloseRequest }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    });

    onCloseRequest();
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
  }

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onCloseRequest}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button onClick={onCloseRequest} className="react-modal-close" type="button">
        <img src={closeModal} alt="Fechar Modal"/>
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder='Valor' type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />

        <TransactionTypeContainer>
          <RadioBox 
            onClick={() => setType('deposit')} 
            isActive={type === 'deposit'}
            activeColor='green'
            type='button'
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            onClick={() => setType('withdraw')} 
            isActive={type === 'withdraw'}
            activeColor='red'
            type='button'
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}