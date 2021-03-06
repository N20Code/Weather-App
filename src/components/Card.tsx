/*
 * Imports
*/

/* Dependencies */
// Components
import { IconButton } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'

// Styles
import { Delete } from '@mui/icons-material'

/* Locals */
// Components
import ItemPaper from './ItemPaper'

// Types
import CardNames from '../utils/types/CardNames'

/*
 * Code
*/

type Props = {
  children: any,
  cards: CardNames[],
  index: number,
  name: CardNames,
  setCards: (cards: CardNames[]) => void,
}

export default function Card({ children, cards, index, name, setCards }: Props): JSX.Element {
  const handleDelete = () => setCards(cards.filter((_: CardNames, _index: number) => _index !== index))

  return (
    <Draggable
      key={name}
      draggableId={name}
      index={index}
    >
      {(provided) => (
        <ItemPaper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            position: 'relative',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '0',
              right: '0',
            }}
            onClick={handleDelete}
          >
            <Delete />
          </IconButton>

          {children}
        </ItemPaper>
      )}
    </Draggable>
  )
}
