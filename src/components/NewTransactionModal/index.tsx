import Modal from 'react-modal';
import { useState } from 'react';

import closeModal from '../../assets/x.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { 
  Container,
  TransactionTypeContainer,
  RadioBox
} from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onCloseRequest: () => void;
}

export function NewTransactionModal({ isOpen, onCloseRequest }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input placeholder='Valor' type="number" />

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

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}