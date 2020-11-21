import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany  } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { BookEntity } from 'src/books/domain/book-domain/book.entity';
import { ChatEntity } from 'src/chats/domain/chat-domain/chat.entity';
import { TransactionEntity } from 'src/chats/domain/transaction-domain/transaction.entity';

@Entity()

export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column()
  dataNasc: Date;

  @Column()
  telefone: number;

  @Column()
  email: String;

  @IsNotEmpty()
  @Column()
  cpf: string;

  @IsNotEmpty()
  @Column()
  senha: string;

  @Column()
  cidade: String;

  @Column()
  estado: String;
  
  @Column()
  pfp: String;
  
  @Column()
  givenrates: Number;
  
  @Column()
  totalrates: Number;
  
  @OneToMany(type => BookEntity, book => book.user, { eager: true })
  books: BookEntity[];
  
  @OneToMany(type => ChatEntity, chat => chat.user, { eager: true })
  chats: ChatEntity[];
  
  @OneToMany(type => TransactionEntity, transaction => transaction.user, { eager: true })
  transactions: TransactionEntity[];

  @OneToMany(type => TransactionEntity, transaction => transaction.receiver, { eager: true })
  receivedTransactions: TransactionEntity[];

}
